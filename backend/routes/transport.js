const express = require('express');
const transport = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/transportController')
const auth = require('./auth')
const cors = require('cors');

transport.use(bodyParser.json());
transport.use(cors( { origin: '*' , } ));
transport.use(express.urlencoded({extended: false}));

transport.post('/addTransport', auth.verifyToken, controller.addTransport); 
transport.get('/getTransport', auth.verifyToken, controller.getTransport);
transport.delete('/deleteTransport/:_id', auth.verifyToken, auth.checkAdmin, controller.deleteTransport);
transport.get('/findTransport/:type', auth.verifyToken, controller.findTransport);
transport.put('/updateTransport/:_id', auth.verifyToken, auth.checkAdmin, controller.updateTransport);

module.exports = transport;