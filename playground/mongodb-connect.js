// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert toDo.')
  //   }
  //   console.log(JSON.stringify(result.ops , undefined, 2))
  // });

  db.collection('Users').insertOne({
    name: 'Ayar Lwin Maw',
    age: 28,
    locatioin: 'USA'
  }, (err, result) => {
    if(err){
      return console.log('Unable insert into Users', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
