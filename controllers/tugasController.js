const Tugas = require("../models/tugas");

// Tampilkan semua tugas
exports.index = async (req, res) => {
  try {
    const tugas = await Tugas.find({});
    res.render("tugas/index", { tugas });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Filter tugas berdasarkan kategori
exports.filter = async (req, res) => {
  try {
    const filter = req.query.kategori ? { kategori: req.query.kategori } : {};
    const tugas = await Tugas.find(filter);
    res.json(tugas);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Tampilkan form tambah tugas
exports.tambah = (req, res) => {
  res.render("tugas/tambah");
};

// Simpan tugas baru
exports.simpan = async (req, res) => {
  try {
    const { nama_tugas, deskripsi, tanggal_deadline, status, kategori } = req.body;
    const tugasBaru = new Tugas({ nama_tugas, deskripsi, tanggal_deadline, status, kategori });
    await tugasBaru.save();
    res.redirect("/tugas");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Tampilkan form edit tugas
exports.edit = async (req, res) => {
  try {
    const tugas = await Tugas.findById(req.params.id);
    res.render("tugas/edit", { tugas });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update tugas
exports.update = async (req, res) => {
  try {
    const { nama_tugas, deskripsi, tanggal_deadline, status, kategori } = req.body;
    await Tugas.findByIdAndUpdate(req.params.id, { nama_tugas, deskripsi, tanggal_deadline, status, kategori });
    res.redirect("/tugas");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Hapus tugas
exports.hapus = async (req, res) => {
  try {
    await Tugas.findByIdAndDelete(req.params.id);
    res.redirect("/tugas");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
