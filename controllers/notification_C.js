const Notification = require('../models/notification_M');
//
exports.acceptNotification = async(req, res)=>{
    const mailObj = {
        subject : req.body.subject,
        recepientEmails : req.body.recepientEmails,
        content : req.body.content,
        requester : req.body.requester,
    };

    try {
        const notification = await Notification.create(mailObj);

        res.status(201).send({
            requestId : notification.id,
            status : notification.status
        });

    }catch(err){
        console.log("error while creating ",err.message);
        res.status(500).send({
            message : "Internal error while creating !"
        });
    }

}

exports.getNotification = async(req, res)=>{
    const reqId = req.params.id;
    try {
        const notification = await Notification.findOne({_id : reqId});
        res.status(200).send(notification);

    }catch(err){
        console.log("error while fatching notification ",err.message);
        res.status(500).send({
            message : "Internal error while fatching !"
        });
    }
}