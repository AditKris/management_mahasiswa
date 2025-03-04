const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const tugasRoutes = require("./routes/tugasRoutes");
const authRoutes = require("./routes/authRoutes");
const path = require('path');
const cookieParser = require('cookie-parser');
const WebSocket = require('ws');
const { setWebSocketServer } = require('./controllers/tugasController');
require("./config/database");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Gunakan rute tugas dan otentikasi
app.use("/tugas", tugasRoutes);
app.use("/", authRoutes);

// Rute untuk halaman utama
app.get("/", (req, res) => {
  if (!req.cookies.authenticated) {
    res.redirect("/login");
  } else {
    res.redirect("/tugas");
  }
});

const server = app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));

// Mengatur server WebSocket
setWebSocketServer(server);