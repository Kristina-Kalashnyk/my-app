const express = require('express');

const productsRoutes = require('./api/products/routes');
const constants = require('./constants/common');
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const port = constants.applicationConstants.port;

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/', productsRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
