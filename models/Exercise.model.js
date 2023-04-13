const { Schema, model } = require("mongoose");
const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            // required: [true, "The name is required"]
        },
        
        type: {
            type: String,
            // required: [true, "The type is required"],
            enum: ["cardio","olympic_weightlifting","plyometrics","powerlifting","strength","stretching","strongman"]
        },

        description: {
            type: String
        },

        video: {
            type: String,
            // required: [true, "The video is required"]
        },

        muscle: {
            type: Schema.Types.ObjectId,
            ref: "Muscle"
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
      }
);

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
