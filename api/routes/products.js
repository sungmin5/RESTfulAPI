const express = require('express');
//handle different routes
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
      message: 'Handling GET request to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
      message: 'Handling POST request to /products'
  });
});

//working with product id
router.get('/:productID', (req, res, next) => {
  const id = req.params.productID;
  if( id === 'special'){
    res.status(200).json({
      message : 'You found special ID',
      id : id
    });
  }
  else {
    res.status(200).json({
      message : 'We do not recognize the product ID'
    });
  }
  res.status(200).json({
      message: 'Handling GET request to /products'
  });
});

router.patch('/:productID', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product'
  });
});

router.delete('/:productID', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product'
  });
});

module.exports = router;
