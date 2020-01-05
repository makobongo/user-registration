var express = require('express');
var router = express.Router();
var registerController = require('../controllers/register');
var loginController = require('../controllers/login');
var usersController = require('../controllers/users');
var verifyToken = require('./verifyToken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/users',verifyToken, usersController.users);
router.get('/user/:user_id', verifyToken, usersController.user);
router.post('/user/:user_id/edit', verifyToken, usersController.edit_user);
router.delete('/user/:user_id/delete', verifyToken, usersController.delete_user);

module.exports = router;
