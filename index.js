const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  dotenv = require('dotenv');
//Import Routes
const authRoute =require('./routes/auth');

dotenv.config();

//Connenct to DB -change admin name first
mongoose.connect( process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log('connected to db'));

//Middleware
app.use(express.json());
//Route Middlewares
app.use('api/user', authRoute); 

app.listen(3000, () => console.log('Server is running!'));