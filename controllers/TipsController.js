const User = require('../models/UserModel');
const Tips = require('../models/TipsModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
exports.createTip = catchAsync(async (req, res, next) => {
  const Tip = await Tips.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      Tip,
    },
  });
  next();
});
exports.dropTip = catchAsync(async (req, res, next) => {
  // const doc = await Model.findByIdAndDelete(req.params.id);
  const deleteTip = await Tips.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
  next();
});
