const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require('./configs/config');

mongoose.connect(dbConfig.DB_URL,()=>{
    console.log(' database connected ');
})
// Routes
require('./routes/notification_API')(app);

app.listen(2020,()=>{
    console.log(" server start... ");
});