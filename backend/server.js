const express = require("express");
const dotenv = require("dotenv").config();

const app = express()

app.get('/',(req,res) =>{
    res.send("Hi this is your first message");
})

app.listen(process.env.port, (req,res) =>{
    console.log("This is a response");
})
