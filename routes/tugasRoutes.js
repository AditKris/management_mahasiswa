const express = require("express");
const router = express.Router();
const tugasController = require("../controllers/tugasController");
const authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware, tugasController.index);
router.get("/filter", authMiddleware, tugasController.filter);
router.get("/tambah", authMiddleware, tugasController.tambah);
router.post("/simpan", authMiddleware, tugasController.simpan);
router.get("/edit/:id", authMiddleware, tugasController.edit);
router.post("/update/:id", authMiddleware, tugasController.update);
router.get("/hapus/:id", authMiddleware, tugasController.hapus);

module.exports = router;