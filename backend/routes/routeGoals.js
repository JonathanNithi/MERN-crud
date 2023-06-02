const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/controllerGoals");


//GET
router.get('/', getGoals)

//POST
router.post('/', setGoal)

//UPDATE
router.put('/:id', updateGoal)

//DELETE
router.delete('/:id', deleteGoal)

module.exports = router