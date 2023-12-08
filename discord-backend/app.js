const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const authRouter = require('./src/routers/authRouter');
const friendInvitationRoutes = require('./src/routers/friendsInvitationsRoutes');

app.use(cors());
app.use(express.json());

// use all  route middleware
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/friend-invitation', friendInvitationRoutes);


module.exports = app;
