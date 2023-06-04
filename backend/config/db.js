const mongoose = require("mongoose");

const connection = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection