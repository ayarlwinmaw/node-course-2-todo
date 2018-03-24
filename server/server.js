var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
//app.use(bodyParser);


app.use(bodyParser.json());

app.listen(3000, ()=> {
  console.log('Starting server at port 3000');
});

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then( (doc)=>{
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// var newTodo = new Todo({
//   text: 'Cook the dinner',
//   completed: false
// });
// newTodo.save().then((todo) =>{
//   console.log('Todo has been saved', todo);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
