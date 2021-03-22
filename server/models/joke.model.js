const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You need a setup to tell a joke!"],
        minlength: [10, "Your setup must be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "It's not a joke without a punchline!"],
        minlength: [3, "The punchline must be at least 3 characters long."]
    }
}, {timestamps:true})

const Joke = new mongoose.model("Joke", JokeSchema);

module.exports = Joke;