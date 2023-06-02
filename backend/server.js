const express = require("express");
const dotenv = require("dotenv").config();

const app = express()

app.use('/api/goals', require('./routes/routeGoals'))

app.listen(process.env.port, (req,res) =>{
    console.log("This is a response");
})
