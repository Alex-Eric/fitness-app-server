const express = require("express");
const router = express.Router();
const request = require("request");
const Exercise = require("../models/Exercise.model");

// GET /api/exercises
router.get("/exercises", (req, res, next) => {
  Exercise.find()
  .then(response=>res.json(response))
  .catch(err=>console.log("Error: " , err))
});

// GET /api/exercises/:id
router.get("/exercises",(req,res,next)=>{
  const {id} = req.params
  Exercise.findById(id)
  .then(response=>res.json(response))
  .catch(err=>console.log("Error: " , err))
})

module.exports = router;
