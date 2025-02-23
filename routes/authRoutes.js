const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rute untuk menampilkan form registrasi
router.get('/register', (req, res) => res.render('tugas/register'));

// Rute untuk menangani registrasi pengguna
router.post('/register', authController.register);

// Rute untuk menampilkan form login
router.get('/login', (req, res) => res.render('tugas/login'));

// Rute untuk menangani login pengguna
router.post('/login', authController.login);

// Rute untuk menangani logout pengguna
router.post('/logout', authController.logout); // Change to POST

module.exports = router;