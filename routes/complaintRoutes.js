const express = require('express');
const complaintsController = require('../controllers/complaintsController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('farmer'),
    complaintsController.createComplaint
  );

router
  .route('/:id')
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    complaintsController.dropComplaint
  );
module.exports = router;
