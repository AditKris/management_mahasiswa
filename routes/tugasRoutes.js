const express = require("express");
const router = express.Router();
const tugasController = require("../controllers/tugasController");
const authMiddleware = require("../middleware/auth");

// Rute untuk menampilkan semua tugas
router.get("/", authMiddleware, tugasController.index);

// Rute untuk memfilter tugas berdasarkan kategori
router.get("/filter", authMiddleware, tugasController.filter);

// Rute untuk menampilkan form tambah tugas
router.get("/tambah", authMiddleware, tugasController.tambah);

// Rute untuk menyimpan tugas baru
router.post("/simpan", authMiddleware, tugasController.simpan);

// Rute untuk menampilkan form edit tugas
router.get("/edit/:id", authMiddleware, tugasController.edit);

// Rute untuk mengupdate tugas
router.post("/update/:id", authMiddleware, tugasController.update);

// Rute untuk menghapus tugas
router.get("/hapus/:id", authMiddleware, tugasController.hapus);

module.exports = router;