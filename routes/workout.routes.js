const express = require("express");
const Workout = require("../models/Workout.model");
const router = express.Router();

// GET /api/workouts
router.get("/workouts",(req,res,next)=>{
    Workout.find()
    .then((response)=>{
        res.json(response)
    })
    .catch(err=>console.log("Error: " , err))
})

// POST /api/workouts/create
router.post("/workouts/create", (req,res,next)=>{
    const {name, series, description, exercises, owner} = req.body
    const workoutData = {name, series ,description, exercises, owner}
    Workout.create(workoutData)
    .then(response=>{ 
    res.json("Created!")
    })
    .catch(err=>console.log("Error: " , err))
})

//PUT /api/workouts/:id/edit
router.put("/workouts/:id/edit",(req,res,next)=>{
    const {name, series, description, exercises} = req.body
    const workoutData = {name, series ,description, exercises}
    Workout.findByIdAndUpdate(req.params.id,workoutData) 
    .then(()=>{
        res.json("Updated!")
    })
    .catch(err=>console.log("Error: " , err))
})

router.delete("/workouts/:id",(req,res,next)=>{

    Workout.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json("Deleted!")
    })
    .catch(err=>console.log("Error: " , err))
})

module.exports = router;


