const mongoose = require('mongoose');

// user table
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

});

// login table
const loginSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timein: {
    type: String,
    required: true,
  },
  timeout: {
    type: String,
    required: true,
  },
});

// const login = mongoose.model('login', loginSchema);
const User = mongoose.model('User', UserSchema);


module.exports = User;
// module.exports = login;
