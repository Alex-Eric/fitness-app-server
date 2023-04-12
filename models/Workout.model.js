const { Schema, model } = require("mongoose");
const workoutSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The name is required"]
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    }
);

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
