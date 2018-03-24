const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect Database');
  }
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aaf6bc7bcb933a839c687c1')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a9e192839f4da31f63166ff')
  },{
    $set: {
      name: 'Ayar'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result , undefined, 2));
  })
});
