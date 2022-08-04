const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const mongoose = require('mongoose');
const dbConfig = require('./configs/config');

const runOn = require('./configs/serverConfig');

mongoose.connect(dbConfig.DB_URL,()=>{
    console.log(' database connected ');
},err =>{
    console.log("some error occurred ",err.message);
});
// Routes
require('./routes/notification_API')(app);

// Attach the cron file for excute
require('./schedulers/mail_secheduler');

app.listen(runOn.PORT,()=>{
    console.log(" server start... ");
});