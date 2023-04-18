const mongoose = require("mongoose");
require('dotenv').config();
const Muscles = require("../models/Muscle.model");
const Exercises = require("../models/Exercise.model");
const axios = require("axios");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fitness-app-server";

const muscles = [
  {
    name: "abdominals",
    photo: "abs",
  },
  {
    name: "abductors",
    photo: "abductors",
  },
  {
    name: "adductors",
    photo: "adductors",
  },
  {
    name: "biceps",
    photo: "biceps",
  }, 
  {
    name: "calves",
    photo: "calfs",
  },
  {
    name: "chest",
    photo: "chest",
  },
  {
    name: "forearms",
    photo: "forearms",
  },
  {
    name: "glutes",
    photo: "gluteus",
  },
  {
    name: "hamstrings",
    photo: "hamstring",
  },
  {
    name: "lats",
    photo: "latissimus",
  },
  {
    name: "lower_back",
    photo: "back_lower",
  },
  {
    name: "middle_back",
    photo: "back",
  },
  {
    name: "neck",
    photo: "neck",
  },
  {
    name: "quadriceps",
    photo: "quadriceps",
  },
  {
    name: "traps",
    photo: "back_upper",
  },
  {
    name: "triceps",
    photo: "triceps",
  },
];

const exercises = [];
const exercisesPromises = muscles.map((muscle) => {
  const filterMuscle = muscle.name;
  return axios
    .get("https://api.api-ninjas.com/v1/exercises?muscle=" + filterMuscle, {
      headers: {
        "X-Api-Key":
          process.env.API_NINJA_KEY_SECRET ||
          "SESp/8Nz4NWIYG6FDDerNA==RD1ZbMZltIomlxMU"
      },
    })
    .then((responseFromAPI) => {
      exercises.push(responseFromAPI.data);
    });
});

Promise.all(exercisesPromises)
  .then(() => {
  const exercisesToBD = exercises.flat().map((element) => {
    return {
      name: element.name,
      type: element.type,
      description: element.instructions,
      muscle: element.muscle,
      owner: "643ee0cad41a596744807919"
    };
  });

  mongoose.connect(MONGO_URI).then((x) => {
    console.log(process.env.PORT)
    console.log(
      `Connected to Mongo to Insert Collections!! Database name: "${x.connections[0].name}"`
    );
  });
  const seedDB = async () => {
    await Muscles.deleteMany({})
    await Muscles.insertMany(muscles, { ordered: false })
    for (const exercise of exercisesToBD) {
      await Exercises.updateOne(
        { name: exercise.name },
        { $set: exercise },
        { upsert: true }
      );
    }
  };
  seedDB().then(() => {
    console.log(`Created ${muscles.length} muscles`);
    console.log(`Created ${exercisesToBD.length} exercises`);
    mongoose.connection.close();
  });
});
