const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/home', authMiddleware, getHome);

module.exports = router;