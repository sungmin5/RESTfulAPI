const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>{
  res.status(200).json({
    message:'Orders were fetched'
  });
});

router.post('/',(req, res, next) =>{
  res.status(201).json({
    message:'Order was created'
  });
});

//working with order id
router.get('/:orderID',(req, res, next) =>{
  const id = req.params.orderID;
  res.status(201).json({
    message:'Order detail',
    id: id
  });
});


router.delete('/:orderID',(req, res, next) =>{
  const id = req.params.orderID;
  res.status(201).json({
    message:'Order deleted',
    id: id
  });
});

module.exports = router;
