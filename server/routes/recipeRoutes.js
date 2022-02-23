const express = require('express');
const router = express.Router();
const recipieController = require('../controllers/recipeController');

router.get('/', recipieController.homepage);

module.exports = router;
