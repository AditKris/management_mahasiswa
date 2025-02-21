const express = require("express");
const router = express.Router();
const tugasController = require("../controllers/tugasController");

router.get("/", tugasController.index);
router.get("/filter", tugasController.filter); // Ensure this line is present
router.get("/tambah", tugasController.tambah);
router.post("/simpan", tugasController.simpan);
router.get("/edit/:id", tugasController.edit);
router.post("/update/:id", tugasController.update);
router.get("/hapus/:id", tugasController.hapus);

module.exports = router;
