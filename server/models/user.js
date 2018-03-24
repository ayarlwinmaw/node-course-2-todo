var mongoose = require('mongoose');
var User = mongoose.model('User',{
  name:{
    type: String,
    minlength: 3,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    minlength: 5,
    trim: true
  }
});

module.exports = {User};
