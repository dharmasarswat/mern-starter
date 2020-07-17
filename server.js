const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/api/user');

const app = express();

//Body-parser middleware
app.use(bodyParser.json());

//DB Config
const DB =  require('./config/key').mongoURI;

//connect to database
mongoose
    .connect(DB , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('Connected To Database'))
    .catch((err)=> console.log(err));

//use routes
app.use('/api/user' , userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`Server Started at PORT ${PORT}`))


