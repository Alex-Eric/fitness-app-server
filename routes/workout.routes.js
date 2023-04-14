const express = require("express");
const Workout = require("../models/Workout.model");
const router = express.Router();

// GET /api/workouts
router.get("/workouts",(req,res,next)=>{
    Workout.find()
    .then((response)=>{
        res.json(response)
    })
})

// POST /api/workouts/create
router.post("/workouts/create", (req,res,next)=>{
    const {name, series, description} = req.body
    const workoutData = {name, series ,description}
    Workout.create(workoutData)
    .then(response=>{
    res.json("Created!")
    })
})



module.exports = router;


