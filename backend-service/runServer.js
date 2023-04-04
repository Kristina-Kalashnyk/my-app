const express = require('express');

const productsRoutes = require('./api/products/routes');
const ordersRoutes = require('./api/orders/routes');

const constants = require('./constants/common');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const port = constants.applicationConstants.port;

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', productsRoutes);
app.use('/', ordersRoutes);


app.listen(port, () => {
  console.log(`Back-end application listening on port: ${port}`)
})
