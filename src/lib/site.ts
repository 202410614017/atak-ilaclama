export const SITE = {
  name: "Atak İlaçlama ve Temizlik Hizmetleri",
  shortName: "ATAK",
  description:
    "Balıkesir'de profesyonel haşere ilaçlama, dezenfeksiyon ve temizlik hizmetleri.",
  phone: "+90 546 155 1848",
  phoneDisplay: "0546 155 18 48",
  whatsapp: "905461551848",
  email: "info@atakilaclamavetemizlik.com",
  address: "Bahçelievler, 5013, 10100 Altıeylül/Balıkesir",
  hours: "24 Saat Açığız",
  instagram: "https://www.instagram.com/",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.1211533674455!2d27.893242311406986!3d39.62447587145933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b7013f0b28c151%3A0xe480dcd377b43f7f!2sBALIKES%C4%B0R%20-%20Atak%20ila%C3%A7lama%20ve%20temizlik%20hizmetleri!5e0!3m2!1str!2str!4v1775070282993!5m2!1str!2str",
  imageBase: "https://atakilaclamavetemizlik.com/wp-content/uploads",
} as const;

export const NAV = [
  { label: "Anasayfa", href: "/" },
  { label: "Haşere İlaçlama Hizmetleri", href: "/hasere-ilaclama" },
  { label: "Temizlik Hizmetleri", href: "/temizlik" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const HERO_SLIDES = [
  {
    image: "/2026/04/atak-ilaclama-hizmeti-1.webp",
    badge: "Balıkesir'in Güvenilir Adresi",
    title: "Uzman Ekip,",
    highlight: "Garantili Sonuç",
    description:
      "Ev, iş yeri ve tüm yaşam alanlarınız için lisanslı ekipman ve Sağlık Bakanlığı onaylı ürünlerle profesyonel ilaçlama ve temizlik hizmeti sunuyoruz.",
  },
  {
    image: "/2026/05/balikesir-hasere-ilaclama.webp",
    badge: "Haşere İlaçlama Hizmetleri",
    title: "Haşerelere Karşı",
    highlight: "Kalıcı Koruma",
    description:
      "Hamam böceği, fare, karınca ve tüm haşere türlerine özel, kokusuz ve çocuk dostu uygulamalarla yaşam alanlarınızı güvence altına alıyoruz.",
  },
  {
    image: "/2026/04/atak-temizlik-hizmeti.webp",
    badge: "Profesyonel Temizlik",
    title: "Hijyen Garantili",
    highlight: "Derin Temizlik",
    description:
      "Ev, ofis, apartman ve inşaat sonrası alanlarda endüstriyel ekipman ve eğitimli personelle titiz, hijyen odaklı temizlik hizmeti veriyoruz.",
  },
  {
    image: "/2026/05/balikesir-dezenfeksiyon.webp",
    badge: "Dezenfeksiyon & Hijyen",
    title: "Sağlıklı Ortamlar İçin",
    highlight: "İleri Teknoloji",
    description:
      "Nano gümüş ve ozon dezenfeksiyon uygulamalarıyla virüs, bakteri ve mikroorganizmalara karşı kapsamlı hijyen çözümleri sunuyoruz.",
  },
] as const;

export const STATS = [
  { value: 5, label: "Hizmet Süresi (Yıl)", sub: "Balıkesir ve Çevresinde" },
  { value: 498, label: "Memnun Müşteri", sub: "Balıkesir ve Çevresinde" },
  { value: 9, label: "Çalışan", sub: "Balıkesir ve Çevresinde" },
  { value: 321, label: "Temizlenen Mekân", sub: "Balıkesir ve Çevresinde" },
  { value: 214, label: "Dezenfekte Edilen Alan", sub: "Sağlıklı Ortamlar İçin" },
  { value: 289, label: "İlaçlanan Bölgeler", sub: "Haşeresiz Yaşam Alanları" },
] as const;

export const PEST_SERVICES = [
  { title: "Hamam Böceği İlaçlama", slug: "balikesir-hamam-bocegi-ilaclama", desc: "Mutfak, banyo ve nemli alanlarda kalıcı çözümler.", image: "/2026/05/hamam-bocegi-ilaclama-hizmet.webp" },
  { title: "Kalorifer Böceği İlaçlama", slug: "balikesir-kalorifer-bocegi-ilaclama", desc: "Apartman ve tesisat çevresindeki üreme noktalarına müdahale.", image: "/2026/05/kalorifer-bocegi-ilaclama.webp" },
  { title: "Fare İlaçlama", slug: "balikesir-fare-ilaclama", desc: "Ev, iş yeri, depo ve apartmanlarda profesyonel mücadele.", image: "/2026/05/fare-ilaclama-hizmet.webp" },
  { title: "Pire İlaçlama", slug: "balikesir-pire-ilaclama", desc: "Evcil hayvan ve açık alan kaynaklı pire sorunlarına çözüm.", image: "/2026/05/pire-ilaclama-hizmet.webp" },
  { title: "Kene İlaçlama", slug: "balikesir-kene-ilaclama", desc: "Bahçe ve açık alanlarda risk oluşturan kenelere müdahale.", image: "/2026/05/kene-ilaclama.webp" },
  { title: "Tahta Kurusu İlaçlama", slug: "balikesir-tahta-kurusu-ilaclama", desc: "Yatak, koltuk ve tekstil alanlarında detaylı uygulama.", image: "/2026/05/tahta-kurusu-ilaclama-hizmeti.webp" },
  { title: "Akrep İlaçlama", slug: "balikesir-akrep-ilaclama", desc: "Zemin kat, bahçe ve kırsal alanlar için etkili koruma.", image: "/2026/05/akrep-ilaclama.webp" },
  { title: "Çıyan İlaçlama", slug: "balikesir-ciyan-ilaclama", desc: "Nemli alanlar ve bina çevresindeki giriş noktalarına müdahale.", image: "/2026/05/balikesir-ciyan-ilaclama-hizmet.webp" },
  { title: "Karınca İlaçlama", slug: "balikesir-karinca-ilaclama", desc: "Mutfak, bina girişi ve bahçelerde koloni merkezli çözüm.", image: "/2026/05/karinca-ilaclama.webp" },
  { title: "Sinek İlaçlama", slug: "balikesir-sinek-ilaclama", desc: "İç ve dış mekânlarda uçan haşerelere karşı uygulama.", image: "/2026/05/sinek-ilaclama.webp" },
  { title: "Yaban Arısı İlaçlama", slug: "balikesir-yaban-arisi-ilaclama", desc: "Çatı, balkon ve bahçelerde güvenli yuva müdahalesi.", image: "/2026/05/yaban-arisi-ilaclama.webp" },
  { title: "Uyuz Böceği İlaçlama", slug: "balikesir-uyuz-bocegi-ilaclama", desc: "Hijyen riski oluşturan problemlere profesyonel çözüm.", image: "/2026/05/uyuz-bocegi-ilaclama.webp" },
  { title: "Böcek İlaçlama", slug: "balikesir-bocek-ilaclama", desc: "Yaşam alanlarında hijyen ve sağlık riski oluşturan böceklere çözüm.", image: "/2026/05/bocek-ilaclama-ilaclama.png" },
  { title: "Nano Gümüş Dezenfeksiyon", slug: "balikesir-nano-gumus-dezenfeksiyon", desc: "Nano gümüş teknolojisi ile ileri düzey dezenfeksiyon uygulamaları.", image: "/2026/05/balikesir-dezenfeksiyon.webp" },
  { title: "Ozon Dezenfeksiyon", slug: "balikesir-ozon-dezenfeksiyon", desc: "Ozon teknolojisi ile hava ve yüzey dezenfeksiyonu.", image: "/2026/05/balikesir-dezenfeksiyon.webp" },
] as const;

export const CLEANING_SERVICES = [
  { title: "Ev Temizliği", slug: "balikesir-ev-temizligi", desc: "Günlük yaşamın oluşturduğu toz, kir ve hijyen sorunlarını profesyonel ekipmanlarla temizliyoruz.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
  { title: "Ofis Temizliği", slug: "balikesir-ofis-temizligi", desc: "Çalışma alanlarında hijyen; çalışan verimliliği ve kurumsal imaj açısından kritik öneme sahiptir.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
  { title: "İnşaat Sonrası Temizlik", slug: "balikesir-insaat-sonrasi-temizlik", desc: "Tadilat sonrası yoğun toz, moloz ve ince işçilik kirlerini profesyonel yöntemlerle temizliyoruz.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
  { title: "Apartman Temizliği", slug: "balikesir-apartman-temizligi", desc: "Apartman girişleri, merdivenler ve ortak yaşam bölgelerinde düzenli temizlik.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "hasere-ilaclama" as const },
  { title: "Fabrika Temizliği", slug: "balikesir-fabrika-temizligi", desc: "Üretim alanlarında sanayi tipi kir ve yağ problemlerine özel ekipmanlarla temizlik.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
  { title: "Dış Cephe Cam Temizliği", slug: "balikesir-dis-cephe-cam-temizligi", desc: "Yüksek katlı yapılar ve vitrinlerde güvenlik standartlarına uygun cam temizliği.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "hasere-ilaclama" as const },
  { title: "Koltuk Yıkama", slug: "balikesir-koltuk-yikama", desc: "Koltuk yüzeylerindeki kir, leke ve kötü kokuları profesyonel yıkama sistemleriyle temizliyoruz.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
  { title: "Yatak Yıkama", slug: "balikesir-yatak-yikama", desc: "Yataklarda biriken ter, toz akarları ve hijyen problemlerini derinlemesine temizliyoruz.", image: "/2026/04/atak-temizlik-hizmeti.webp", base: "temizlik" as const },
] as const;

export const EXTRA_HASERE_SLUGS = [
  "balikesir-apartman-temizligi",
  "balikesir-dis-cephe-cam-temizligi",
] as const;

export function serviceHref(base: "temizlik" | "hasere-ilaclama", slug: string) {
  return `/${base}/${slug}`;
}

export const BLOG_POSTS = [
  { title: "Kokusuz İlaçlama Sonrası Evde Temizlik Yapılmalı mı? (Doğru Bilinen Yanlışlar)", slug: "kokusuz-ilaclama-sonrasi", date: "15 Mayıs 2026", excerpt: "Evde hamam böceği, karınca veya pire gibi haşerelerle karşılaşıldığında birçok kişi ilaçlama sonrası hemen temizliğe girişmek ister.", image: "/2026/05/kokusuz-ilaclama-sonrasi-temizlik-yapilir-mi-768x512.webp" },
  { title: "Balıkesir'de Yaz Aylarında En Sık Karşılaşılan 5 Haşere ve Evde Alınabilecek Önlemler", slug: "balikesirde-yaz-aylarinda-en-sik-karsilasilan-5-hasere", date: "13 Mayıs 2026", excerpt: "Sıcaklıkların artması ve yaz aylarının gelmesiyle birlikte, doğadaki hareketlilik evlerimize taşınır.", image: "/2026/05/yaz-aylarinda-en-sik-karsilasilacak-hasereler-768x512.webp" },
  { title: "Evde Hamam Böceği Gördüğünüzde Asla Yapmamanız Gereken 3 Hata", slug: "hamam-bocegi-ilaclamasinda-yapilan-yanlislar", date: "12 Mayıs 2026", excerpt: "Gece su içmek için mutfağa girdiğinizde ışığı açtığınız an tezgâhın altından bir hamam böceği görmek...", image: "/2026/05/evde-hamam-bocegine-karsi-yanlis-yapilanlar-768x512.webp" },
  { title: "Islak Bezle Koltuk Silmek Neden Temizlik Değil, Tehlikedir?", slug: "islak-bezle-koltuk-silmek", date: "11 Mayıs 2026", excerpt: "Bahar temizliği, bayram hazırlığı veya dökülen bir çayı temizlemek… Çoğumuzun ilk refleksi ıslak bezle silmektir.", image: "/2026/05/islak-bezle-koltuk-silme-768x432.webp" },
] as const;

export function img(path: string) {
  return `${SITE.imageBase}${path}`;
}
