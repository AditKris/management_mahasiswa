const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware untuk otentikasi pengguna
const authMiddleware = async (req, res, next) => {
  // Mendapatkan token dari cookies
  const token = req.cookies.token;
  if (!token) {
    // Jika token tidak ada, redirect ke halaman login
    return res.redirect('/login');
  }

  try {
    // Memverifikasi token
    const decoded = jwt.verify(token, 'your_jwt_secret');
    // Mencari pengguna berdasarkan ID yang ada di token
    const user = await User.findById(decoded.userId);
    if (!user) {
      // Jika pengguna tidak ditemukan, redirect ke halaman login
      return res.redirect('/login');
    }
    // Menyimpan informasi pengguna di request object
    req.user = user;
    next();
  } catch (error) {
    // Jika terjadi kesalahan, redirect ke halaman login
    res.redirect('/login');
  }
};

module.exports = authMiddleware;