const express = require('express');

const productsRoutes = require('./controller');

const router = express.Router();

router.get('/products', productsRoutes.getAll);


module.exports = router
