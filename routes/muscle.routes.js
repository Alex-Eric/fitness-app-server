const express = require("express");
const Muscle = require("../models/Muscle.model");
const router = express.Router();

// GET /api/muscles
router.get("/muscles",(req,res,next)=>{
  Muscle.find()
    .then((response)=>{
        res.json(response)
    })
    .catch(err=>console.log("Error: " , err))
})

module.exports = router;
