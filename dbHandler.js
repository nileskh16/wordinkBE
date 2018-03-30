var mongoose = require('mongoose');

module.exports.connectDb = function () {
  const mongoUrl = 'mongodb://localhost:27117/dictionary';
  mongoose.connect(mongoUrl);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("Connected to the mongodb...");
  });
};