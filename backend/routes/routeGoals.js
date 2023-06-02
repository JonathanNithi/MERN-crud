const express = require("express");
const router = express.Router();

//GET
router.get('/', (req,res) => {
    res.json({message:"Getting your goals"})
})

//POST
router.post('/', (req,res) => {
    res.json({message:"Created a goal"})
})

//UPDATE
router.put('/:id', (req,res) => {
    res.json({message:"Updated a goal"})
})

//DELETE
router.delete('/:id', (req,res) => {
    res.json({message:"Deleted a goal"})
})
module.exports = router