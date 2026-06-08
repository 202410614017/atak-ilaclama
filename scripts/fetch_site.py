import urllib.request
import re
import json
import time
from html.parser import HTMLParser
from urllib.parse import urlparse

BASE = "https://atakilaclamavetemizlik.com"

main_pages = [
    "/",
    "/hasere-ilaclama/",
    "/temizlik/",
    "/dezenfeksiyon-hizmetleri/",
    "/hakkimizda/",
    "/kurumsal/",
    "/iletisim/",
    "/blog/",
]

hasere_slugs = [
    "balikesir-hamam-bocegi-ilaclama",
    "kalorifer-bocegi",
    "fare",
    "pire",
    "kene",
    "tahta-kurusu",
    "akrep",
    "ciyan",
    "karinca",
    "sinek",
    "yaban-arisi",
    "uyuz-bocegi",
    "bocek-ilaclama",
    "nano-gumus-dezenfeksiyon",
    "ozon-dezenfeksiyon",
]

temizlik_slugs = [
    "balikesir-ev-temizligi",
    "balikesir-ofis-temizligi",
    "balikesir-insaat-sonrasi-temizlik",
    "balikesir-fabrika-temizligi",
    "balikesir-koltuk-yikama",
    "balikesir-yatak-yikama",
]

blog_slugs = [
    "kokusuz-ilaclama-sonrasi",
    "balikesirde-yaz-aylarinda-en-sik-karsilasilan-5-hasere",
    "hamam-bocegi-ilaclamasinda-yapilan-yanlislar",
    "evde-hamam-bocegi",
    "islak-bezle-koltuk-silmek",
]


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_script = self.in_style = self.in_noscript = 0
        self.skip_tags = {"script", "style", "noscript", "svg", "path", "iframe"}
        self.tag_stack = []
        self.elements = []
        self.current_text = []
        self.in_a = False
        self.a_href = ""

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        self.tag_stack.append(tag)
        if tag in self.skip_tags:
            if tag == "script":
                self.in_script += 1
            elif tag == "style":
                self.in_style += 1
            elif tag == "noscript":
                self.in_noscript += 1
            return
        if self.in_script or self.in_style or self.in_noscript:
            return
        attrs_dict = dict(attrs)
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6", "p", "li"):
            self.current_text = []
        elif tag == "a":
            self.in_a = True
            self.a_href = attrs_dict.get("href", "")

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self.skip_tags:
            if tag == "script":
                self.in_script = max(0, self.in_script - 1)
            elif tag == "style":
                self.in_style = max(0, self.in_style - 1)
            elif tag == "noscript":
                self.in_noscript = max(0, self.in_noscript - 1)
            if self.tag_stack and self.tag_stack[-1] == tag:
                self.tag_stack.pop()
            return
        if self.in_script or self.in_style or self.in_noscript:
            if self.tag_stack and self.tag_stack[-1] == tag:
                self.tag_stack.pop()
            return
        text = " ".join(self.current_text).strip()
        text = re.sub(r"\s+", " ", text)
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6") and text:
            self.elements.append({"type": tag, "text": text})
            self.current_text = []
        elif tag == "p" and text:
            self.elements.append({"type": "p", "text": text})
            self.current_text = []
        elif tag == "li" and text:
            self.elements.append({"type": "li", "text": text})
            self.current_text = []
        elif tag == "a" and self.in_a:
            self.in_a = False
            if text:
                self.elements.append({"type": "a", "text": text, "href": self.a_href})
        if self.tag_stack and self.tag_stack[-1] == tag:
            self.tag_stack.pop()

    def handle_data(self, data):
        if self.in_script or self.in_style or self.in_noscript:
            return
        t = data.strip()
        if t:
            self.current_text.append(t)


def fetch(url):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", errors="replace"), r.geturl()


def slug_from_url(url):
    path = urlparse(url).path.strip("/")
    return path if path else "anasayfa"


def is_404(html):
    title_m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    title = title_m.group(1).lower() if title_m else ""
    return "404" in title or "not found" in title or "bulunamad" in title


def extract(html, url):
    title_m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    title = re.sub(r"\s+", " ", title_m.group(1)).strip() if title_m else ""
    h1_m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    h1 = re.sub(r"<[^>]+>", "", h1_m.group(1)).strip() if h1_m else ""
    h1 = re.sub(r"\s+", " ", h1)

    parser = TextExtractor()
    parser.feed(html)

    headings = [
        {"level": e["type"], "text": e["text"]}
        for e in parser.elements
        if e["type"].startswith("h")
    ]
    paragraphs = [e["text"] for e in parser.elements if e["type"] == "p"]
    bullet_lists = [e["text"] for e in parser.elements if e["type"] == "li"]

    phones = sorted(
        set(
            re.findall(
                r"(?:\+90[\s\-]?)?0?\s*5\d{2}[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}|0\d{3}[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}",
                html,
            )
        )
    )
    emails = sorted(set(re.findall(r"[\w\.-]+@[\w\.-]+\.\w+", html)))

    for e in parser.elements:
        if e["type"] == "a":
            href = e.get("href", "")
            if href.startswith("mailto:"):
                emails.append(e["text"])
            if "tel:" in href:
                phones.append(e["text"])

    phones = sorted(set(phones))
    emails = sorted(set(emails))

    addr_m = re.findall(r"(?:Adres|Address)[:\s]*([^<]{10,120})", html, re.I)
    addresses = [re.sub(r"\s+", " ", a).strip() for a in addr_m]

    contact = {"phones": phones, "emails": emails, "addresses": addresses}

    return {
        "url": url,
        "slug": slug_from_url(url),
        "page_title": title,
        "h1": h1,
        "headings": headings,
        "paragraphs": paragraphs,
        "bullet_lists": bullet_lists,
        "contact_info": contact,
    }


def fetch_sitemap_urls():
    sitemaps = [
        f"{BASE}/page-sitemap.xml",
        f"{BASE}/post-sitemap.xml",
    ]
    urls = []
    for sm in sitemaps:
        req = urllib.request.Request(
            sm,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            },
        )
        with urllib.request.urlopen(req, timeout=60) as r:
            xml = r.read().decode("utf-8", errors="replace")
        urls.extend(re.findall(r"<loc>(https?://[^<]+)</loc>", xml))
    return urls


def build_urls():
    candidates = fetch_sitemap_urls()

    for p in main_pages:
        candidates.append(BASE + p)

    for s in hasere_slugs:
        candidates.extend(
            [
                f"{BASE}/hasere-ilaclama/{s}/",
                f"{BASE}/hasere-ilaclama/balikesir-{s}-ilaclama/",
                f"{BASE}/{s}/",
            ]
        )

    for s in temizlik_slugs:
        candidates.extend(
            [
                f"{BASE}/temizlik/{s}/",
                f"{BASE}/{s}/",
            ]
        )

    for s in blog_slugs:
        candidates.extend(
            [
                f"{BASE}/blog/{s}/",
                f"{BASE}/{s}/",
            ]
        )

    seen = set()
    urls = []
    for u in candidates:
        if u not in seen:
            seen.add(u)
            urls.append(u)
    return urls


def main():
    urls = build_urls()
    results = {}
    errors = {}
    fetched_slugs = set()

    for url in urls:
        try:
            html, final_url = fetch(url)
            if is_404(html) or len(html) < 500:
                errors[url] = "404 or empty"
                continue
            slug = slug_from_url(final_url)
            if slug in fetched_slugs:
                continue
            data = extract(html, final_url)
            results[slug] = data
            fetched_slugs.add(slug)
            time.sleep(0.25)
        except Exception as e:
            errors[url] = str(e)

    out_path = r"c:\Users\mehme\OneDrive\Desktop\atakilaclamacursor\site_content.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({"pages": results, "errors": errors, "count": len(results)}, f, ensure_ascii=False, indent=2)

    print(f"Fetched {len(results)} pages, {len(errors)} errors")
    print("Slugs:", sorted(results.keys()))


if __name__ == "__main__":
    main()
