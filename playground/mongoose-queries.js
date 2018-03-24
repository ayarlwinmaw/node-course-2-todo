const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab5cde611b7b18443d5afb3';
//
// if(!ObjectID.isValid(id)){
//   console.log('Not a valid ID');
// }
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID' , todo);
// }).catch( (e) => { console.log(e)});

var id = '5ab46fba591e685537789bc1';

if(!ObjectID.isValid(id)){
  console.log('Not a valid ID');
}

User.findById(id).then((user) => {
  if(!user){
    console.log('ID not found');
  }
  console.log('User by ID', user);
}).catch((e)=> {console.log(e)})
