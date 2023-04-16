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
router.get("/exercises/:exerciseId",(req,res,next)=>{
  const {exerciseId} = req.params
  Exercise.findById(exerciseId)
  .then(response=>res.json(response))
  .catch(err=>console.log("Error: " , err))
})


//POST /api/exercises/create
router.post("/exercises/create",(req,res,next)=>{
  console.log(req.body)
  const {name,type,description} = req.body
  Exercise.create({name,type,description})
  .then(()=>res.status(201).json("Created!"))
  .catch((error) => {
    console.log("error: ", error);
  });
})

//PUT /api/exercises/:id


//DELETE /api/exercises/:id


module.exports = router;