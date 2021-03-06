const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to MongoDB');

  db.collection('Users').find({name: {$ne:'Alex'}}).toArray().then((docs) => {
    console.log('Users List');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch the users', err);
  });
});
