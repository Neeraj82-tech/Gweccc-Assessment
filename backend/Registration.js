const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  organization: String,
  delegates: Number,
});

module.exports = mongoose.model('Registration', registrationSchema);
