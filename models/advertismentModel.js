const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const advertismentSchema = new mongoose.Schema({
  cropname: { type: String, required: [true, 'Please tell crop name!'] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  quantity: {
    type: Number,
  },
  date: Date,
  image: {
    type: String,
    default: 'default.jpg',
  },
  price: { type: Number },
});
const Advertisment = mongoose.model('Advertisment', advertismentSchema);
module.exports = Advertisment;
