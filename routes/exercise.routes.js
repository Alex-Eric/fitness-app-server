const express = require("express");
const router = express.Router();
const request = require("request");
const Exercise = require("../models/Exercise.model");

// GET /api/exercises
router.get("/exercises", (req, res, next) => {
  // const muscleFilter = req.querry.muscleFilter

  // let filter = {}
  // if (muscleFilter) {
  //   filter = {muscle: {$eq: muscleFilter}}
  // }
  Exercise.find()
    .then((response) => res.json(response))
    .catch((err) => console.log("Error: ", err));
});

// GET /api/exercises/:id
router.get("/exercises/:exerciseId", (req, res, next) => {
  const { exerciseId } = req.params;
  Exercise.findById(exerciseId)
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log("Error: ", err));
});

//POST /api/exercises/create
router.post("/exercises/create", (req, res, next) => {
  const { name, type, description,muscle ,owner} = req.body;
  Exercise.create({ name, type, description,muscle,owner })
    .then(() => res.status(201).json("Created!"))
    .catch((error) => {
      res.status(401).json({ message: "Name already exists" });
    });
});

//PUT /api/exercises/:id
router.put("/exercises/:exerciseId", (req, res, next) => {
  const { exerciseId } = req.params;
  const { name, type, description,muscle } = req.body;
  Exercise.findByIdAndUpdate(exerciseId, { name, type, description,muscle })
    .then(() => res.status(200).json("Updated!"))
    .catch((error) => {
      console.log("error: ", error);
    });
});

//DELETE /api/exercises/:id
router.delete("/exercises/:exerciseId", (req, res, next) => {
  const { exerciseId } = req.params;
  Exercise.findByIdAndDelete(exerciseId)
    .then(() => res.status(200).json("Deleted!"))
    .catch((err) => console.log("Error: ", err));
});

module.exports = router;
