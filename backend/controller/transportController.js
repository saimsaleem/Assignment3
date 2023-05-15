const transport = require('../model/transport');

const addTransport = async (req,res) => {
  
    const {type,route,seats,price,image} = req.body;

    const newTransport = new transport({type,route,seats,price,image});

    await newTransport.save().then((transport) => {

        res.status(200).json({
            transport: transport,
        });

    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

}

const getTransport = async (req, res) => {

    await transport.find().then((transport) => {

        res.status(200).json({
            transport: transport,

        });

    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
}

exports.addTransport = addTransport;
exports.getTransport = getTransport;