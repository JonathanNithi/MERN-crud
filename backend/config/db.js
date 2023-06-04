const mongoose = require("mongoose");

const connection = () =>{
    try {
        const conn = mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log("Something went wrong")
    }
}

module.exports = connection