import express from 'express';
import path from 'path';
import UserModel from '../models/user.js';

var router = express.Router();

router.get('/', function (req, res, next) {
  return res.sendFile(path.join(path.resolve('dist/index.html')));
});

export default router;