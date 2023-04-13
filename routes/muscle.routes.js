const express = require("express");
const Muscle = require("../models/Muscle.model");
const router = express.Router();

// GET /api/muscles
router.get("/muscles",(req,res,next)=>{
    Muscle.find()
    .then((response)=>{
        res.json(response)
    })
})

module.exports = router;
