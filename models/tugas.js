const mongoose = require("mongoose");

const TugasSchema = new mongoose.Schema({
  nama_tugas: { type: String, required: true },
  deskripsi: { type: String, required: true },
  tanggal_deadline: { type: Date, required: true },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  kategori: { type: String, enum: ["Kuliah", "Pribadi", "Organisasi"], required: true }
});

module.exports = mongoose.model("Tugas", TugasSchema);
