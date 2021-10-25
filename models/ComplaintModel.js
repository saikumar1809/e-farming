const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const complaintSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please fill your complaint'] },
  farmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },

  time: Date,
  status: {
    type: String,
    enum: ['responded', 'pending', 'rejected'],
    default: 'pending',
  },
});
const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;
