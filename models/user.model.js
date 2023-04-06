const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  contactNumber: String,
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
  },
});

module.exports = mongoose.model('User', UserSchema);