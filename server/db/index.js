import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
  console.log("Connected to test database");
});

export default dbConnection;