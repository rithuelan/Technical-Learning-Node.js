const express = require('express');
const router = express.Router();

// Import Controller
const { getUsers, createUser } = require('../controllers/userController');

// GET /users/
router.get('/', getUsers);

// POST /users/
router.post('/', createUser);

module.exports = router;
