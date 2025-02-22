const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', (req, res) => res.render('tugas/register'));
router.post('/register', authController.register);
router.get('/login', (req, res) => res.render('tugas/login'));
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
