const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors');
const controller = require('../controller/userController')

user.use(bodyParser.json());
user.use(cors( { origin: '*' , } ));
user.use(express.urlencoded({extended: false}));

user.post('/login', controller.login)
user.post('/signup', controller.signup)
user.get('/getUsers', controller.getUsers)

module.exports = user;