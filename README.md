# Siar TV

Siar TV adalah aplikasi React untuk menjelajahi kanal video, melihat contoh jadwal, dan menyimpan favorit di browser.

## Pengembangan

Gunakan Node.js 22 atau 24 dan npm. Jalankan dari direktori repositori.

```sh
npm ci
npm start
```

Pengujian dan build produksi:

```sh
npm test -- --runInBand
npm run build
```

Untuk hosting statis, sajikan folder `build` dengan fallback ke `index.html` untuk rute aplikasi seperti `/live/nusantara`. Sejumlah rute video bisa dibuka langsung dari URL tersebut.

## Sumber video

- Katalog bawaan berisi lima cuplikan MP4 animasi dari ilustrasi yang dihasilkan untuk proyek ini. Cuplikan tersimpan di `public/media` dan bisa diputar tanpa layanan eksternal.
- Di halaman **Siaran Live**, pilih **Tambah sumber** untuk memasukkan URL HTTP(S) yang path-nya berakhiran `.m3u8` atau `.mp4`. Bila aplikasi disajikan melalui HTTPS, gunakan sumber HTTPS.
- HLS memakai dukungan native browser jika tersedia dan hls.js pada browser lain yang mendukung Media Source Extensions. Untuk sumber HLS lintas origin, server video harus mengizinkan origin aplikasi melalui CORS pada manifest dan segmen.
- Sumber tambahan dan favorit tersimpan di browser yang digunakan. Jadwal bawaan adalah contoh dan katalog tidak menyediakan saluran TV resmi.
