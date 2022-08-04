/**
 * Here we are going to have the logic to schedule the sending of the email
 */
const cron = require('node-cron');
const Notification = require('../models/notification_M');
const emialTranspoter = require('../notifiers/emailService');

cron.schedule("*/20 * * * * *",async ()=>{
    // write the logic to read from DB and send email

    // Fetch all the notification which are in UN-SENT status
    console.log("Inside the scheduler");

    const notifications = await Notification.find({status : "UN-SENT"});
    if(notifications){
        console.log("Number of un-sent request are ",notifications.length);

        notifications.forEach(n=>{
            const mailObj = {
                to : n.recepientEmails,
                subject : n.subject,
                text : n.content
            }
            console.log("Sending mail for ",mailObj);
            emialTranspoter.sendMail(mailObj, async(err, info)=>{
                if(err){
                    console.log("Error while sending email ",err.message);
                }
                else{
                    console.log("Successfully sent the mail ",info);

                    // I need to go and update status of notification in database
                    n.status = "SENT";
                    await n.save();
                }
            });         
        });
        
    }
});
