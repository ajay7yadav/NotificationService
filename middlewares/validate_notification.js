
const validateRequest = (req, res, next)=>{
    if(!req.body.subject){
        return res.status(401).send({
            message : "invalid feild subject !"
        })
    }
    if(!req.body.recepientEmails){
        return res.status(401).send({
            message : "invalid feild recepientEmails !"
        })
    }
    if(!req.body.content){
        return res.status(401).send({
            message : "invalid feild content !"
        })
    }
    next();
}

module.exports = {
    checkBody : validateRequest
};