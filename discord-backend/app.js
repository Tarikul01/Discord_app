const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const authRouter = require('./src/routers/authRouter');

app.use(cors());
app.use(express.json());

// use all  route middleware
app.use('/api/v1/auth', authRouter);


module.exports = app;
