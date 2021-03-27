const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutdb = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please choose an exercise"

            },

            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type: Number

            },
            duration: {
                type: Number,
                required: "Please enter exercise duration"
            },

            distance: {
                type: Number
            },

        }],
        
    day: {
        type: Date,
        default: Date.now
    }

});

const WorkoutFitness = mongoose.model("workout", workoutdb);

module.exports = WorkoutFitness;