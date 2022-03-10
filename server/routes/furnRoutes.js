const express = require('express');
const router = express.Router();
const furnController = require('../controllers/furnController');

router.get('/', furnController.homepage);
router.get('/en', furnController.homepage_en);
router.get('/pl', furnController.homepage_pl);
module.exports = router;
