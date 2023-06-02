const getGoals = (req,res) =>{
    res.json({message:"Getting your goals"})
}

const setGoal = (req,res) => {
    res.json({message:"Created a goal"})
}

const updateGoal = (req,res) => {
    res.json({message:`Updated goal ${req.params.id}`})
}

const deleteGoal = (req,res) => {
    res.json({message:`Deleted goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}