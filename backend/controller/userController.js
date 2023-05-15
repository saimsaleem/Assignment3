const user = require('../model/user')
const jwt = require("jsonwebtoken")

const login = (req, res)=>{

    let{email, password} = req.body;


    user.findOne({email:email}).then((foundUser)=>{
        if(!foundUser){
            res.status(404).send({"Message":"User Not FOUND"})
        }else{
            if(foundUser.password == password){
                let token = jwt.sign({
                    id:foundUser._id,
                    role:foundUser.role
                },
               "saimsaleem",{
                    expiresIn: '5h'
                })
                
                res.status(200).send({"Message":"Successfully LOGGED IN", user:foundUser, token:token})
            }else{
                res.status(500).send({"Message":"Invalid Password"})
            }
        }
    })
}

const signup = (req , res)=>{

    let {name, email, password, role} = req.body;

    let newUser = new user({
        name,
        email,
        password,
        role
    });

    newUser.save().then((user)=>{
        res.status(200).send({"Message":"User Successfully Created", user:user})
    }).catch((err)=>{
        res.status(500).send({"Message":"There was some ERROR", err:err})
        })
    
}

const getUsers = async (req,res)=>{


    await user.find().then((user) => {
    
    res.status(200).json({
        user: user,
        });
    
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        });

}

exports.login = login;
exports.signup = signup;
exports.getUsers = getUsers;