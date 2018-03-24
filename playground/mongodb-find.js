const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB');
  }
  console.log('Connected to MongoDB');

  db.collection('Todos').find({'completed' : true}).toArray().then((docs) => {
    console.log('To do list');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch the database', err);
  });
});
