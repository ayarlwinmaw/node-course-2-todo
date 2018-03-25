var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

//app.use(bodyParser);


app.use(bodyParser.json());

app.listen(port, ()=> {
  console.log(`Starting server at ${port}`);
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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  // res.send(req.params);
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(todo){
      res.send({todo});
    }else{
      res.status(404).send();
    }
  }).catch((e) => { res.status(400).send(); });
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
