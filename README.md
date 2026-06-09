# Atak İlaçlama ve Temizlik Hizmetleri

Balıkesir haşere ilaçlama, dezenfeksiyon ve temizlik hizmetleri web sitesi.

## Geliştirme

```bash
npm install
node scripts/build-content.mjs
npm run dev
```

## GitHub Pages'e Yayınlama

1. GitHub'da yeni bir repo oluşturun (ör. `atak-ilaclama`)
2. Bu projeyi push edin:

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/atak-ilaclama.git
git push -u origin main
```

3. Repo **Settings → Pages → Build and deployment** bölümünde:
   - **Source:** GitHub Actions

4. Push sonrası Action otomatik çalışır. Site adresi:

```
https://202410614017.github.io/atak-ilaclama/
```

> Repo adı `kullaniciadi.github.io` ise site kök adreste yayınlanır: `https://kullaniciadi.github.io/`

## Mobil & Masaüstü

Site responsive tasarlanmıştır. GitHub Pages yalnızca statik dosya sunar; mobil/masaüstü uyumluluk tarayıcıda aynı şekilde çalışır.
