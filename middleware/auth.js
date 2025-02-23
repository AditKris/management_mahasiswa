const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.redirect('/login');
    }
    req.user = user;
    next();
  } catch (error) {
    res.redirect('/login');
  }
};

module.exports = authMiddleware;