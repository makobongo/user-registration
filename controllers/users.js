var models = require('../models');

exports.users = (req, res, next) => {
    return models.User.findAll()
    .then( users => {
        res.status(200).json({
            users: users
        })
    })
    .catch(err => {
        console.log(err);
    })
}
exports.user = (req, res, next) => {
    return models.User.findOne({
        where: {
            id: req.params.user_id
        }
    })
    .then( user => {
        res.status(200).json({
            user: user
        })
    })
    .catch(err => {
        console.log(err);
    })
}
exports.edit_user = (req, res, next) => {
    return models.User.update({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }, {
        where: {
            id: req.params.user_id
        }
    })
    .then ( result => {
        res.status(200).json({
            result: result
        })
    })
    .catch( err => {
        console.log(err);
    })
}
exports.delete_user = (req, res, next) => {
    return models.User.destroy({
        where: {
            id: req.params.user_id
        }
    })
    .then( result => {
        res.status(200).json({
            result: result
        })
    })
    .catch( err => {
        console.log(err)
    })
}