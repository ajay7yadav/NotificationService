const controller = require('../controllers/notification_C');
const mid = require('../middlewares/validate_notification');
module.exports =(app)=>{

    // API for accepting notification
    app.post('/notifiServ/api/v1/notifications' ,[mid.checkBody] ,controller.acceptNotification);
    // API for get notification
    app.get('/notifiServ/api/v1/notifications/:id' ,controller.getNotification);
}