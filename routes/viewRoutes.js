const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsController.getOverview);

// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignupForm);
router
  .route('/farmer')
  .get(
    authController.protect,
    authController.restrictTo('farmer'),
    viewsController.getFarmerHome
  );
router
  .route('/admin')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    viewsController.getAdminHome
  );
router
  .route('/supplier')
  .get(
    authController.protect,
    authController.restrictTo('supplier'),
    viewsController.getSupplierHome
  );
router
  .route('/farmer/complaints')
  .get(
    authController.protect,
    authController.restrictTo('farmer', 'admin'),
    viewsController.getFarmerComplaints
  );
router
  .route('/admin/complaints')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    viewsController.getAllComplaints
  );
router
  .route('/tips')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    viewsController.getCreateTip
  );
router
  .route('/advertisment')
  .get(
    authController.protect,
    authController.restrictTo('supplier', 'farmer'),
    viewsController.getAdvertisment
  );

module.exports = router;
