const express = require('express');
const advertismentController = require('../controllers/advertismentController');
const authController = require('../controllers/authController');
const viewsController = require('../controllers/viewsController');
const userController = require('../controllers/userController');
const router = express.Router();

router.post(
  '/',
  authController.protect,
  authController.restrictTo('supplier', 'farmer'),
  advertismentController.createAdvertisment
);

router.route('/:id').delete(advertismentController.dropAdvertaisment);
router
  .route('/getAdvertismentForm')
  .get(
    authController.protect,
    authController.restrictTo('supplier', 'farmer'),
    viewsController.getAdvertismentForm
  );
module.exports = router;
