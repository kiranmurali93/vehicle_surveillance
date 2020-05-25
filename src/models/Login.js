const mongoose = require('mongoose');

// login table
const loginSchema = new mongoose.Schema({
    username: {
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
    // timeout: {
    //   type: String,
    //   required: true,
    // },
  });
  
const Login = mongoose.model('login', loginSchema);
module.exports = Login;
  