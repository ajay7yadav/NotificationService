const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    port : 465,
    service : "gmail",
    auth : {
        user: 'ajay7yadav95@gmail.com',
        pass: 'akbvweqfericltsa',
    },
    secure : true,
});

const mailDataObj = {
    from : 'pm-office-india@gmail.com',
    to : '09himanshusah@gmail.com',
    subject : 'testing notification is work',
    text : "kya bhai are you missing me"
}

tranporter.sendMail(mailDataObj,(err,data)=>{
    if(err){
        console.log("Error ",err.message);
    }else{
        console.log("email sent successfull");
    }
});