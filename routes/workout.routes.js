const express = require("express");
const router = express.Router();

// GET /api/workouts
router.get("/workouts",(req,res,next)=>{
    res.json("Workouts!")
})

module.exports = router;