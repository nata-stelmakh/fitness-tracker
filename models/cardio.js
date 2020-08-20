const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for exersize"
    },
    type: {
        type: String,
        trim: true,
        value: "cardio",
        required: "Type of exersize"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    distance: {
        type: Number,
        required: "Enter a distance"
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
