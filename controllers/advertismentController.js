const User = require('../models/UserModel');
const Advertisment = require('../models/advertismentModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.dropAdvertaisment = catchAsync(async (req, res, next) => {
  // const doc = await Model.findByIdAndDelete(req.params.id);
  const deleteAdvertaisment = await Advertisment.findByIdAndDelete(
    req.params.id
  );

  res.status(204).json({
    status: 'success',
    data: null,
  });
  next();
});
exports.createAdvertisment = catchAsync(async (req, res, next) => {
  // TODO:console.log(req.user.id);
  req.body.user = req.user.id;
  const advertisment = await Advertisment.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { advertisment, url: req.user.role },
  });
  next();
});
exports.getAllAdvertisments = catchAsync(async (req, res, next) => {
  // TODO:console.log(req.user.id);

  const ads = await Advertisment.find().populate('user', 'name', 'mobileNo');

  res.status(201).json({
    status: 'success',
    data: { ads },
  });
  next();
});
