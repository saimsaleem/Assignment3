const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/transportController')
const cors = require('cors');

user.use(bodyParser.json());
user.use(cors( { origin: '*' , } ));
user.use(express.urlencoded({extended: false}));

user.post('/addTransport',controller.addTransport); 
user.get('/getTransport',controller.getTransport);
user.delete('/deleteTransport/:_id',controller.deleteTransport);
user.get('/findTransport/:type',controller.findTransport);
user.put('/updateTransport/:_id',controller.updateTransport);

module.exports = user;