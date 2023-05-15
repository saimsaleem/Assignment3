const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const transportRouter = require('./routes/transport')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use('/user', userRouter);
app.use('/transport',transportRouter)
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Home!");
});

mongoose.connect('mongodb+srv://saimsaleem:1234@cluster0.daqmhiu.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log("DB Connected!");    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err)=>{
    console.log(err);
})