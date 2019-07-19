exports.Mongoose = function () {
  const mongoose = require('mongoose');
  const keys = require('./key');

  mongoose.connect(keys.mongodb.url, {
      promiseLibrary: require('bluebird'),
      useNewUrlParser: true
    })
    .then(() => console.log('Connection successfully established'))
    .catch((err) => console.log(err));
}