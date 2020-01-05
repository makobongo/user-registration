var models = require('../models');
var bcrypt = require('bcrypt');

exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if ( err ){
            res.status(500).json({
                error: "auth fail!"
            })
        } else {
            const user =  models.User.build({
                email: req.body.email,
                username: req.body.username,
                password: hash
            })
            user.save()
            .then( lead  => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err)
            })
        }
    });
}