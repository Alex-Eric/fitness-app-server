const mongoose = require("mongoose");
const Muscles = require("../models/Muscle.model")
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fitness-app-server";

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

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  const seedDB = async () =>{
    await Muscles.deleteMany({})
    await Muscles.insertMany(muscles)
  }
seedDB()
.then(() => {
  console.log(`Created ${muscles.length} muscles`);
  mongoose.connection.close();
})