const Users = require('../models/UserModel');
const Tips = require('../models/TipsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Advertisment = require('../models/AdvertismentModel');
const Complaints = require('../models/ComplaintModel');
exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  // const tours = await Tour.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('overview', {
    title: 'Homepage',
    // tours,
  });
});
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};
exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'create your account',
  });
};
exports.getFarmerHome = catchAsync(async (req, res, next) => {
  res.status(200).render('farmer', {});
});
exports.getFarmerComplaints = catchAsync(async (req, res, next) => {
  res.status(200).render('farmer-complaints', {});
});
exports.getFarmerTips = catchAsync(async (req, res, next) => {
  res.status(200).render('farmer-tips', {});
});

//admin
exports.getAdminHome = catchAsync(async (req, res, next) => {
  res.status(200).render('admin', {});
});
exports.getCreateTip = catchAsync(async (req, res, next) => {
  res.status(200).render('create-tip');
});
exports.getAllTips = catchAsync(async (req, res, next) => {
  const tips = await Tips.find();
  res.status(200).render('farmer-tips', {
    title: 'All Tips',
    tips,
  });
});

exports.getSupplierHome = catchAsync(async (req, res, next) => {
  res.status(200).render('supplier', {});
});
//advertisments
exports.getAdvertisment = catchAsync(async (req, res, next) => {
  const ads = await Advertisment.find().populate('user');

  res.status(200).render(`advertisment-${req.user.role}`, {
    ads,
  });
});
exports.getAdvertismentForm = catchAsync(async (req, res, next) => {
  res.status(200).render(`new-advertisment-${req.user.role}`);
});
exports.getAllComplaints = catchAsync(async (req, res, next) => {
  // TODO:console.log(req.user.id);

  const comps = await Complaints.find().populate('farmer');

  res.status(200).render('admin-complaints', {
    title: 'All Complaints',
    comps,
  });
});
