import express from 'express';
import dbConnection from './db/index.js';
import UserModel from './models/user.js';
import routes from './router/index.js';

const app = express();

app.use(express.static('dist'));

app.use('/', routes);

app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
