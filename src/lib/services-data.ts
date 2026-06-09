import { PEST_SERVICES } from "./site";

export const PEST_ICONS: Record<string, string> = {
  "balikesir-hamam-bocegi-ilaclama": "🪳",
  "balikesir-tahta-kurusu-ilaclama": "🛏️",
  "balikesir-fare-ilaclama": "🐭",
  "balikesir-pire-ilaclama": "🦟",
  "balikesir-kene-ilaclama": "🕷️",
  "balikesir-sinek-ilaclama": "🪰",
  "balikesir-kalorifer-bocegi-ilaclama": "🐛",
  "balikesir-karinca-ilaclama": "🐜",
  "balikesir-akrep-ilaclama": "🦂",
  "balikesir-ciyan-ilaclama": "🐛",
  "balikesir-yaban-arisi-ilaclama": "🐝",
  "balikesir-uyuz-bocegi-ilaclama": "🔬",
  "balikesir-bocek-ilaclama": "🐞",
  "balikesir-nano-gumus-dezenfeksiyon": "🧪",
  "balikesir-ozon-dezenfeksiyon": "💨",
};

export const PEST_DETAILS: Record<string, string> = {
  "balikesir-hamam-bocegi-ilaclama":
    "Jel yemleme + rezidüel sprey + yumurta ootek takibi. Mutfak ve banyo odaklı kalıcı kontrol.",
  "balikesir-tahta-kurusu-ilaclama":
    "Yatak, baza, koltuk detaylı kontrol. Yoğunluğa göre planlı uygulama, yeniden bulaşma riski minimize.",
  "balikesir-fare-ilaclama":
    "Güvenli kapalı yem istasyonu, geçiş yolu analizi. Fare ve sıçan için farklı strateji.",
  "balikesir-pire-ilaclama":
    "Halı, koltuk, çatlak-köşe hedefli. Yumurta döngüsü için kombine uygulama. Evcil hayvan güvenli.",
  "balikesir-kene-ilaclama":
    "Bahçe, açık alan ve evcil hayvan barınakları. Bulaşıcı hastalık riskine karşı koruma.",
  "balikesir-sinek-ilaclama":
    "İç ve dış mekân uçan haşere kontrolü. ULV uygulama ve kaynak tespiti.",
  "balikesir-kalorifer-bocegi-ilaclama":
    "Apartman tesisatı ve nemli alanlara özel. Üreme noktalarına nokta atışı müdahale.",
  "balikesir-karinca-ilaclama":
    "Koloni merkezli çözüm. Mutfak, bina girişi ve bahçe alanlarında kalıcı kontrol.",
  "balikesir-akrep-ilaclama":
    "Zemin kat, bahçe ve kırsal alanlar. Tehlikeli canlılara karşı güvenli müdahale.",
  "balikesir-ciyan-ilaclama":
    "Nemli alanlar ve bina çevresi giriş noktalarına hedefli uygulama.",
  "balikesir-yaban-arisi-ilaclama":
    "Çatı, balkon ve bahçe yuvalarına güvenli müdahale. Acil servis imkânı.",
  "balikesir-uyuz-bocegi-ilaclama":
    "Hijyen riski oluşturan alanlarda profesyonel ve gizli uygulama.",
  "balikesir-bocek-ilaclama":
    "Genel böcek ilaçlama. Yaşam alanlarında kapsamlı haşere kontrolü.",
  "balikesir-nano-gumus-dezenfeksiyon":
    "İleri teknoloji nano gümüş ile virüs ve bakterilere karşı dezenfeksiyon.",
  "balikesir-ozon-dezenfeksiyon":
    "Ozon teknolojisi ile hava ve yüzey dezenfeksiyonu. Kokusuz ve etkili.",
};

export const VENUE_SERVICES = [
  { icon: "🏠", title: "Ev & Daire", desc: "Çocuk ve evcil hayvan güvenli, kokusuz ve hızlı kuruyan formüller.", href: "/hasere-ilaclama" },
  { icon: "🏢", title: "Daire & Apartman", desc: "Dikey koordinasyon. Komşu kaynaklı haşere geçişlerine bina geneli yaklaşım.", href: "/hasere-ilaclama/balikesir-apartman-temizligi" },
  { icon: "🏡", title: "Müstakil Ev", desc: "Bahçe + ev kombine uygulama. Çevresel bariyer ve periyodik kontrol.", href: "/hasere-ilaclama" },
  { icon: "🏛️", title: "Villa", desc: "Geniş bahçe ve havuz çevresi yönetimi. Lüks konutlara özel hassas uygulama.", href: "/hasere-ilaclama" },
  { icon: "🏖️", title: "Yazlık", desc: "Sezon öncesi koruyucu uygulama. Edremit, Ayvalık, Erdek bölgeleri.", href: "/hasere-ilaclama" },
  { icon: "🏘️", title: "Apartman & Site", desc: "Ortak alan, bodrum ve periyodik yönetim planı. KDV dahil faturalama.", href: "/hasere-ilaclama/balikesir-apartman-temizligi" },
  { icon: "🏬", title: "Ofis & İşyeri", desc: "Mesai sonrası uygulama. Çalışan rahatsızlığını minimuma indirme.", href: "/hasere-ilaclama" },
  { icon: "🛍️", title: "Dükkan & Mağaza", desc: "Kapanış saatinde uygulama. Küçük işletmeler için hızlı ve ekonomik çözüm.", href: "/hasere-ilaclama" },
  { icon: "🏭", title: "Fabrika & Depo", desc: "Endüstriyel ölçekte IPM programı. HACCP ve ISO uyumlu raporlama.", href: "/hasere-ilaclama" },
  { icon: "🍽️", title: "Restoran & Lokanta", desc: "Gıda güvenliği uyumlu jel yem. Hijyen belgesi ve periyodik raporlama.", href: "/hasere-ilaclama" },
  { icon: "🛒", title: "Market", desc: "Manav, kasap ve depo bölümlerine özel yaklaşım. Sinek ve kemirgen kontrolü.", href: "/hasere-ilaclama" },
  { icon: "🥪", title: "Büfe", desc: "Küçük gıda işletmeleri için hızlı uygulama. Açılış öncesi hazır.", href: "/hasere-ilaclama" },
  { icon: "🥩", title: "Kasap", desc: "Et ile temas eden yüzeylerde hijyen. Sinek ve kemirgen önleme.", href: "/hasere-ilaclama" },
  { icon: "🏨", title: "Butik Otel", desc: "Misafir memnuniyeti ve tahtakurusu önleme. Sessiz ve hızlı uygulama.", href: "/hasere-ilaclama/balikesir-tahta-kurusu-ilaclama" },
  { icon: "🏙️", title: "Şehir Oteli", desc: "Yüksek oda devri. Hijyen standartlarına uygun periyodik program.", href: "/hasere-ilaclama" },
  { icon: "🌴", title: "Turizm Oteli", desc: "Sahil alanları, havuz çevresi ve sezon öncesi hazırlık.", href: "/hasere-ilaclama" },
] as const;

export const SPECIAL_SERVICES = [
  {
    icon: "📅",
    title: "Periyodik İlaçlama Anlaşması",
    desc: "Aylık veya 2 aylık planlı uygulama. Hijyen belgesi uyumlu raporlama, öncelikli müdahale. Restoran, market, otel için önerilir.",
    href: "/iletisim",
  },
  {
    icon: "🧴",
    title: "Genel Dezenfeksiyon",
    desc: "Virüs, bakteri, mantar hedefli yüzey ve hava dezenfeksiyonu. Nano gümüş ve ozon teknolojileri. Ofis, okul, sağlık kuruluşu için.",
    href: "/dezenfeksiyon-hizmetleri",
  },
  {
    icon: "✨",
    title: "Profesyonel Temizlik",
    desc: "Ev, ofis, apartman ve inşaat sonrası kapsamlı temizlik. Endüstriyel ekipman ve hijyen garantili hizmet.",
    href: "/temizlik",
  },
  {
    icon: "🧼",
    title: "Apartman & Dış Cephe Temizliği",
    desc: "Apartman ortak alanları ve dış cephe cam temizliği. Güvenlik standartlarına uygun uygulama.",
    href: "/hasere-ilaclama/balikesir-apartman-temizligi",
  },
] as const;

export const BALIKESIR_DISTRICTS = [
  "Karesi", "Altıeylül", "Edremit", "Bandırma", "Ayvalık", "Burhaniye",
  "Gönen", "Erdek", "Susurluk", "Bigadiç", "Sındırgı", "Dursunbey",
  "Havran", "İvrindi", "Kepsut", "Manyas", "Marmara", "Savaştepe",
  "Balya", "Gömeç",
] as const;

export const PEST_GRID = PEST_SERVICES.map((s) => ({
  ...s,
  icon: PEST_ICONS[s.slug] ?? "🐛",
  detail: PEST_DETAILS[s.slug] ?? s.desc,
  href: `/hasere-ilaclama/${s.slug}`,
}));
