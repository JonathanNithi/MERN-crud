const express = require("express");
const dotenv = require("dotenv").config();
const connection = require('./config/db')
const app = express()
connection()

app.use('/api/goals', require('./routes/routeGoals'))

app.listen(process.env.port, (req,res) =>{
    console.log("Successful connection");
})
