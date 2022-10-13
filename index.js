const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  dotenv = require('dotenv');

dotenv.config();


//Connenct to DB -change admin name first
mongoose.connect( process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log('connected to db'))

//Import Routes
const authRoute =require('./routes/auth');

//Route Middlewares
app.use('api/user', authRoute); 

app.listen(3000, () => console.log('Server is running!'));