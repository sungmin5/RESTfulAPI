const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');

//handling products route request
app.use('/products' , productRoutes);

//export app
module.exports = app;
