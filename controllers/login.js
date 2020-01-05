var models = require('../models');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
    const user =  await models.User.findOne({ 
        where: {
            email: req.body.email
        }
     })
     if(user < 1){
         res.status(400).json({
             msg: "Account not established!"
         })
     }
     //compare passwords
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if(!validPass){
            res.status(400).json({
                msg: 'Wrong email or password!'
            }) 
        } else {
            const token = await jwt.sign({ id: user.id, email: user.email, date: user.createdAt },  process.env.TOKEN_SECRET);
            res.header('auth-token', token).json({
                msg: token
            })
        }
}