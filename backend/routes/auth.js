const jwt = require("jsonwebtoken")
const verifyToken = (req, res, next) => {
    
    let token = req.headers['token']
    console.log("Verifying");
    jwt.verify(token, 'saimsaleem', (err, decoded)=>{
        if(!err){
            req.decoded = decoded;
            next();
        }else{
            res.status(500).send({"Message":"Not Authorized"})
        }
    })
}


const checkAdmin = (req, res, next)=>{
    console.log("Checking");
    if(req.decoded.role == 'admin'){
        next();
    }
    else{
        res.status(404).send({"Message":"You are NOT Admin"})
    }
}

exports.checkAdmin = checkAdmin;
exports.verifyToken = verifyToken;