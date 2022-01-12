const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on posts')
})

//Connect to DB
mongoose.connect( process.env.DB_CONNECTION, { UseNewUrlParser: true }, () => 
  console.log('connected to DB!')
);

app.listen(PORT, () => {
    console.log('message: server is connected...')
})
