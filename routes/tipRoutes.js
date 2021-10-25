const express = require('express');
const tipsController = require('../controllers/tipsController');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    tipsController.createTip
  );
router.get(
  '/getAllTips',
  authController.protect,
  authController.restrictTo('farmer'),
  viewController.getAllTips
);

router.route('/:id').delete(tipsController.dropTip);
module.exports = router;
