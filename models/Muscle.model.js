const { Schema, model } = require("mongoose");
const muscleSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The name is required"]
        },
        photo: {
            type: String,
            required: [true, "The photo is required"]
        }
    }
    
);

const Muscle = model("Muscle", muscleSchema);

module.exports = Muscle;