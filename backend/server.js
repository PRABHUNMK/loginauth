const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const app = express()
const bp = require('body-parser')

const usermodels = require('./usermodel');


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

app.use(bp.json())

const connectionurl="mongodb+srv://prabhu:BZ52rwkRQiH02stL@cluster0.b93gxyk.mongodb.net/userauth?retryWrites=true&w=majority";
mongoose.connect(connectionurl);

app.post('/register',(req,res)=>{
    usermodels.create(req.body)
    .then(
        (result)=>{res.send(result)
            ,console.log("data posted successfully")

    })
    .catch(
        (err)=>{res.send(err)
    })

})

app.post('/login',(req,res)=>{
    const {name,email,num}=req.body;
    usermodels.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.num===num)
            {
                res.json("success")
            }else{
                res.json("number is incorrect")
            }
        }
    })
    .catch(err=>{
        console.log("user not found")
    })
})

app.listen(3500,()=>{
    console.log("Server is running on port 3500")
});

