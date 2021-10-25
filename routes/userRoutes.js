const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();
router.get('/logout', authController.logout);

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
