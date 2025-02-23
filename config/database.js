const mongoose = require("mongoose");

// Koneksi ke database MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mvc_mahasiswa", {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal!"));
db.once("open", () => console.log("Koneksi ke MongoDB berhasil!"));

module.exports = db;
