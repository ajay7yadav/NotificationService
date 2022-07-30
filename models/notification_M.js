const mongoose = require('mongoose');
const constants = require('../utils/constants');

const NotificationSchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    recepientEmails : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    requester : {
        type : String
    },
    status : {
        type : String,
        default : constants.status.un_sent,
        enum : [constants.status.sent,constants.status.un_sent,]
    },
    createdAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        },
        immuted : true
    },
    updateAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    }
});

module.exports = mongoose.model('notification',NotificationSchema)