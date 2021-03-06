const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type of exersize"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for exersize"
        },
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        distance: {
            type: Number,
        },

        weight: {
            type: Number,
        },
        sets: {
            type: Number,

        },
        reps: {
            type: Number,
        }

    }],



},
    { toJSON: { virtuals: true } }

);

workoutSchema.virtual("totalDuration").get(function () {
    let total = 0
    this.exercises.forEach(exercise => {
        total += exercise.duration;
    });
    return total;
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;