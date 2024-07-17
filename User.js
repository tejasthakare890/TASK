const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false, // Make password optional for Google users
  },
  googleId: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
