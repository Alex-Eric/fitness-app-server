const { Schema, model } = require("mongoose");
const exerciceSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The name is required"]
        },
        video: {
            type: String,
            required: [true, "The video is required"]
        },
        description: {
            type: String
        },
        type: {
            type: String,
            required: [true, "The type is required"],
            enum: ["cardio","olympic_weightlifting","plyometrics","powerlifting","strength","stretching","strongman"]
        },
        muscle: {
            type: Schema.Types.ObjectId,
            ref: "Muscle"
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
);

const Exercice = model("Exercice", exerciceSchema);

module.exports = Exercice;
