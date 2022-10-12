const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connenct to DB -change admin name first
mongoose.connect('mongodb+srv://<admin name>:<LSPbCvMzUqpEOZrO>@cluster0.z3a5rdz.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true },
() => console.log('connected to db'))

//Import Routes
const authRoute =require('./routes/auth');

//Route Middlewares
app.use('api/user', authRoute); 

app.listen(3000, () => console.log('Server is running!'));