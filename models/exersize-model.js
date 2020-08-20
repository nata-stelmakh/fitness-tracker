const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exersizeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for exersize"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter a type of exersize"
    },
    weight: {
        type: Number,
        required: "Enter weights"
    },
    sets: {
        type: Number,
        required: "Enter an amount of sets"
    },
    reps: {
        type: Number,
        required: "Enter an amount of reps"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Exersize = mongoose.model("Exersize", exersizeSchema);

module.exports = Exersize;
