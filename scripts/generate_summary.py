import json

path = r"c:\Users\mehme\OneDrive\Desktop\atakilaclamacursor\site_content.json"
with open(path, encoding="utf-8") as f:
    data = json.load(f)

pages = data["pages"]
order = [
    "anasayfa",
    "hasere-ilaclama",
    "temizlik",
    "dezenfeksiyon-hizmetleri",
    "hakkimizda",
    "kurumsal",
    "iletisim",
    "blog",
]
hasere = sorted(k for k in pages if k.startswith("hasere-ilaclama/"))
temizlik = sorted(k for k in pages if k.startswith("temizlik/"))
blog = sorted(
    k
    for k in pages
    if k
    in [
        "kokusuz-ilaclama-sonrasi",
        "balikesirde-yaz-aylarinda-en-sik-karsilasilan-5-hasere",
        "hamam-bocegi-ilaclamasinda-yapilan-yanlislar",
        "evde-hamam-bocegi",
        "islak-bezle-koltuk-silmek",
    ]
)
keys = [k for k in order if k in pages] + hasere + temizlik + blog

nav = {
    "Anasayfa",
    "Haşere İlaçlama Hizmetleri",
    "Temizlik Hizmetleri",
    "Kurumsal",
    "Blog",
    "Hakkımızda",
    "İletişim",
    "Dezenfeksiyon Hizmetleri",
}

out = []
for slug in keys:
    p = pages[slug]
    out.append("=" * 80)
    out.append(f"SLUG: {slug}")
    out.append(f"URL: {p['url']}")
    out.append(f"PAGE TITLE: {p['page_title']}")
    if p.get("h1"):
        out.append(f"H1: {p['h1']}")
    out.append("")
    out.append("HEADINGS:")
    for h in p["headings"]:
        out.append(f"  [{h['level']}] {h['text']}")
    out.append("")
    out.append("PARAGRAPHS:")
    for i, para in enumerate(p["paragraphs"], 1):
        out.append(f"  {i}. {para}")
    out.append("")
    out.append("BULLET LISTS:")
    bullets = [b for b in p["bullet_lists"] if b not in nav and len(b) > 3]
    for b in bullets:
        out.append(f"  - {b}")
    out.append("")
    ci = p["contact_info"]
    out.append("CONTACT INFO:")
    out.append(f"  Phones: {', '.join(ci['phones']) if ci['phones'] else '—'}")
    out.append(f"  Emails: {', '.join(ci['emails']) if ci['emails'] else '—'}")
    if ci["addresses"]:
        out.append(f"  Addresses: {', '.join(ci['addresses'])}")
    out.append("")

summary_path = r"c:\Users\mehme\OneDrive\Desktop\atakilaclamacursor\site_content_summary.txt"
with open(summary_path, "w", encoding="utf-8") as f:
    f.write("\n".join(out))

print(f"Written {len(keys)} pages, {sum(len(x) for x in out)} chars")
