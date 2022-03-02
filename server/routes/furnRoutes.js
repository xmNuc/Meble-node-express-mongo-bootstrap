const express = require('express');
const router = express.Router();
const furnController = require('../controllers/furnController');

router.get('/', furnController.homepage);

module.exports = router;
