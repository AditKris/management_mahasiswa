const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authController = {
    // Fungsi untuk registrasi pengguna baru
    register: async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = new User({ username, password });
            await user.save();
            res.redirect('/login');
        } catch (error) {
            res.status(400).send('Error registering user');
        }
    },
    // Fungsi untuk login pengguna
    login: async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user || !(await user.comparePassword(password))) {
                return res.render('tugas/login', { error: 'Username atau password salah' });           
            }
            const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/tugas');
        } catch (error) {
            res.status(400).send('Error logging in');
        }
    },
    // Fungsi untuk logout pengguna
    logout: (req, res) => {
        res.clearCookie('token');
        res.redirect('/login');
    }
};

module.exports = authController;
