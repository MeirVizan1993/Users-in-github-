var express = require('express');
var body_parser = require('body-parser');
const controllerUser = require('../controller/users');

var router = express.Router();

var bodyParser = body_parser.json();

//const db = require('../models');


//var favorite = [];

// controller function //

//get all user from database
router.get('/',controllerUser.getAllUsers);

//save users in database
router.post('/',controllerUser.saveUser);

//delete users from database
router.delete('/',controllerUser.deleteUser);

module.exports = router;
