const express = require('express');

const ordersRoutes = require('./controller');
const ordersRouter = express.Router();


ordersRouter.post('/orders', ordersRoutes.createOrder);

module.exports = ordersRouter
