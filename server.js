const express = require('express');
require('dotenv').config();
const path = require('path');
const body = require('body-parser');
const index = require('./routes/index');
const app = express();
// const router = express.Router();  

app.use(body.json());
app.use(body.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'dist')));

app.use('/home', index);

app.listen(3000, () => {
    console.log("Hey 4444!!!");
});