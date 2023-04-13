const mongoose = require("mongoose");
const Muscles = require("../models/Muscle.model");
const Exercises = require("../models/Exercise.model");
const request = require("request");
const axios = require("axios");

const MONGO_URI =
  /* process.env.MONGODB_URI ||*/ "mongodb://127.0.0.1:27017/fitness-app-server";

const muscles = [
  {
    name: "abdominals",
    photo: "Photo",
  },
  {
    name: "abductors",
    photo: "Photo",
  },
  {
    name: "adductors",
    photo: "Photo",
  },
  {
    name: "biceps",
    photo: "Photo",
  },
  {
    name: "calves",
    photo: "Photo",
  },
  {
    name: "chest",
    photo: "Photo",
  },
  {
    name: "forearms",
    photo: "Photo",
  },
  {
    name: "glutes",
    photo: "Photo",
  },
  {
    name: "hamstrings",
    photo: "Photo",
  },
  {
    name: "lats",
    photo: "Photo",
  },
  {
    name: "lower_back",
    photo: "Photo",
  },
  {
    name: "middle_back",
    photo: "Photo",
  },
  {
    name: "neck",
    photo: "Photo",
  },
  {
    name: "quadriceps",
    photo: "Photo",
  },
  {
    name: "traps",
    photo: "Photo",
  },
  {
    name: "triceps",
    photo: "Photo",
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
          "SESp/8Nz4NWIYG6FDDerNA==RD1ZbMZltIomlxMU",
      },
    })
    .then((responseFromAPI) => {
      return exercises.push(responseFromAPI.data);
    });
});

Promise.all(exercisesPromises).then((exercisesData) => {
  const exercisesToBD = exercises.flat().map((element) => {
    return {
      name: element.name,
      type: element.type,
      description: element.instructions,
    };
  });

  mongoose.connect(MONGO_URI).then((x) => {
    console.log(
      `Connected to Mongo to Insert Collections!! Database name: "${x.connections[0].name}"`
    );
  });
  const seedDB = async () => {
    await Muscles.deleteMany({});
    await Muscles.insertMany(muscles);
    await Exercises.deleteMany({});
    await Exercises.insertMany(exercisesToBD);
  };
  seedDB().then(() => {
    console.log(`Created ${muscles.length} muscles`);
    console.log(`Created ${exercisesToBD.length} exercises`);
    mongoose.connection.close();
  });
});
