const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('Unable to connect to MongoDB', err);
  }
  //deleteMany
  // db.collection('Users').deleteMany({name: 'Ayar Lwin Maw'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({ '_id' : new ObjectID('5a9e192fc537b331f917e131')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
});
