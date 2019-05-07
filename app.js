const express = require('express');
const app = express();

//handling client
app.use((req, res, next) => {
  //test message 200 with message
  res.status(200).json({
    message: 'It works!'
  })
})

//export app
module.exports = app;
