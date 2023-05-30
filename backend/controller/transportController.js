const transport = require('../model/transport');
const mongoose = require('mongoose');

const addTransport = async (req,res) => {
  
  console.log("Adding");

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

const deleteTransport = async (req, res) => {

  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: 'Invalid' });
  }
  const transports = await transport.findOneAndDelete({ _id: _id });
  if (transports) {
    res.status(200).json(transports);
  } else {
    res.status(404).json({ error: 'Not Found!' });
    }
};

const findTransport = async (req,res) => {
  const {type} = req.params;
  transport.findOne({type: type})
  .then((transport) => {
    res.status(200).json({
      transport: transport,
    });
  }).catch((err) => 
  {
  console.error(err);
  });
}


const updateTransport = async (req,res) => {

  const{_id} = req.params;

  const newtransport = {
    type:req.body.type,
    route:req.body.route,
    seats:req.body.seats,
    price:req.body.price,
    image:req.body.image,
  }

 await transport.findByIdAndUpdate(_id,newtransport,function(err,updatedprofile){
    if(err){
      console.log(err);
    }else{
      res.json(updatedprofile);
    }
  }).catch((err) => 
  {
  console.error(err);
  });

}

exports.addTransport = addTransport;
exports.getTransport = getTransport;
exports.deleteTransport = deleteTransport;
exports.updateTransport = updateTransport;
exports.findTransport = findTransport;