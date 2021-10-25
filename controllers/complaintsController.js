const User = require('../models/UserModel');
const Complaints = require('../models/ComplaintModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
exports.dropComplaint = catchAsync(async (req, res, next) => {
  // const doc = await Model.findByIdAndDelete(req.params.id);
  const deleteComplaint = await Complaint.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
  next();
});
exports.createComplaint = catchAsync(async (req, res, next) => {
  //const newUser = await User.find({ id: req.body.farmerId });
  const date = Date.now();
  req.body.time = date;
  const newComplaint = await Complaints.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      complaint: newComplaint,
    },
  });
  next();
});
exports.getAllComplaints = catchAsync(async (req, res, next) => {
  // TODO:console.log(req.user.id);

  const comps = await Complaints.find().populate('farmer', 'name', 'mobileNo');

  res.status(201).json({
    status: 'success',
    data: { comps },
  });
  next();
});
// exports.deleteCohort = factory.deleteOne(Cohort);
