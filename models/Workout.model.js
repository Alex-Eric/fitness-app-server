const { Schema, model } = require("mongoose");
const workoutSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The name is required"]
        },
        exercises:[{
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }],
        series:{
            type: Number
        },
        reps:{
            type: Number
        },
        description:{
            type: String
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
      }
);

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
