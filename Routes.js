// backend/routes/welcomeRoutes.js
const express = require('express');
const router = express.Router();
const { getWelcomeMessage, createUser } = require('./Start');

router.get('/', getWelcomeMessage);
router.post('/user', createUser);

module.exports = router;
