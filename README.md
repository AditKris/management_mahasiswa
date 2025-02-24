# Management Tugas Mahasiswa

Aplikasi web untuk mengelola tugas mahasiswa, dibangun dengan Node.js, Express, MongoDB, dan EJS.

## Fitur

- Autentikasi pengguna (registrasi, login, logout)
- Tambah, edit, hapus tugas
- Filter tugas berdasarkan kategori
- Notifikasi real-time untuk tugas baru menggunakan WebSocket

## Instalasi

1. Clone repository:
    ```sh
    git clone https://github.com/AditKris/management_mahasiswa.git
    cd managementtugas_mahasiswa
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Siapkan MongoDB:
    - Pastikan MongoDBCompass berjalan di `mongodb://127.0.0.1:27017/mvc_mahasiswa`.

4. Jalankan aplikasi:
    ```sh
    npm start
    ```

5. Buka browser dan navigasikan ke `http://localhost:3000`.

## Penggunaan

- Registrasi pengguna baru.
- Login dengan kredensial pengguna yang terdaftar.
- Tambah, edit, hapus tugas.
- Filter tugas berdasarkan kategori.
- Terima notifikasi real-time untuk tugas baru.

## Struktur Proyek

```
managementtugas_mahasiswa/
├── controllers/        # File controller
├── middleware/         # File middleware
├── models/             # Model Mongoose
├── public/             # File statis (CSS, JS, gambar)
├── routes/             # File rute
├── views/              # Template EJS
├── app.js              # File aplikasi utama
├── package.json        # File NPM package
└── README.md           # Dokumentasi proyek
```
