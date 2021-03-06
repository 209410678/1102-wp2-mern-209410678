//
//const express = require('express');

import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';

import morgan from 'morgan';
//import cors from 'cors';
// db and authenticateUser

import connectDB_78 from './db/connect_78.js';

//routes

import authRoutes_78 from './routes/authRoutes_78.js';

// middleware
import notFoundMiddleware_78 from './middleware/not-found_78.js';
import errorHandlerMiddleware_78 from './middleware/error-handler_78.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
//app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // throw new Error('testing for error');
  //res.send('Welcome 鄭芷琳 209410678');
  res.json({ msg: 'Welcome -- 鄭芷琳 209410678' });
});

app.get('/api/v1', (req, res) => {
  // throw new Error('testing for error');
  //res.send('Welcome 鄭芷琳 209410678');
  res.json({ msg: 'API v1 -- 鄭芷琳 209410678' });
});

app.use('/api/v1/auth_78', authRoutes_78);

app.use(notFoundMiddleware_78);
app.use(errorHandlerMiddleware_78);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_78(process.env.MONGO_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
