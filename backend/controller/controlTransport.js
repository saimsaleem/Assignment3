// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://saimsaleem:1234@cluster0.daqmhiu.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true});
// const transport = require('../model/modelTransport')


// const addTransport = async (req,res) => {
  
//   const {name,type,seats,price,image} = req.body;

//     const newTransport = new transport({
//         name,type,seats,price,image
//       });
      
//     console.log(req.body);

    
//     const result = await newTransport.save().catch((err) => 
//     {
//     console.error(err);
//     });

//     res.send('Controller posted!');


// }

// const getTransport = (req, res) => {

//   transport.find()
//   .then((transport) => {
//     res.status(200).json({
//       transport: transport,
//     });
//   }).catch((err) => 
//   {
//   console.error(err);
//   });
// }

// const deleteTransport = async (req, res) => {

//   const { id } = req.params;
//   console.log(id);
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: 'Invalid' });
//   }
//   const transports = await transport.findOneAndDelete({ _id: id });
//   if (transports) {
//     res.status(200).json(transports);
//   } else {
//     res.status(404).json({ error: 'Not Found!' });
//   }
// };

// const findTransport = async (req,res) => {
//   const {namee} = req.params;
//   console.log(namee);
//   transport.findOne({name: namee})
//   .then((transport) => {
//     res.status(200).json({
//       transport: transport,
//     });
//   }).catch((err) => 
//   {
//   console.error(err);
//   });
// }


// const updateTransport = async (req,res) => {
//   const{id} = req.params;

//   const newtransport = {
//     name:req.body.name,
//     type:req.body.type,
//     seats:req.body.seats,
//     price:req.body.price,
//     image:req.body.image,
//   }

//   transport.findByIdAndUpdate(id,newtransport,function(err,updatedprofile){
//     if(err){
//       console.log(err);
//     }else{
//       res.json("Profile Updated")
//     }
//   }).catch((err) => 
//   {
//   console.error(err);
//   });

// }

//   exports.getTransport = getTransport;
//   exports.addTransport = addTransport;
//   exports.deleteTransport = deleteTransport;
//   exports.updateTransport = updateTransport;
//   exports.findTransport = findTransport;