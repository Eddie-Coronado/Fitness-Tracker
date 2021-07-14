const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        deafult: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            require: "Exercise type must be entered"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name must be entered"
        },
        duration: {
            type: String,
            trim: true,
            required: "Exercise name must be entered"
        },
        weight: {
            type: String,
            trim: true,
            required: "Exercise name must be entered"
        },
        sets: {
            type: String,
            trim: true,
            required: "Exercise name must be entered"
        },
        reps: {
            type: String,
            trim: true,
            required: "Reps must be entered"
        },

    }],
    totalDuration: {
        type: Number,
        deafualt: 0,
    }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;