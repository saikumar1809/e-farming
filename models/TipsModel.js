const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const TipSchema = new mongoose.Schema({
  message: { type: String, required: [true, 'Message cannot be null'] },
});
const Tips = mongoose.model('Tips', TipSchema);
module.exports = Tips;
