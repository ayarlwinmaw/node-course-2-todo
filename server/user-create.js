var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

var newUser = new User({
  name: 'Ayar',
  email: 'ayar@gmail.com'
});

newUser.save().then((user) => {
  console.log('User has been saved', user);
},(e) => {
  console.log('Unable to save user', e);
});
