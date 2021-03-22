const Joke = require("../models/joke.model");


module.exports = {
    index : (req,res) => {
        Joke.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create : (req,res) => {
        Joke.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    random : (req,res) => {
        Joke.find()
            .then(jokes => {
                let random = Math.floor(Math.random() * jokes.length);
                res.json({results: jokes[random]})
            })
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show : (req,res) => {
        Joke.find({_id: req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update : (req,res) => {
        Joke.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    destroy: (req,res) => {
        Joke.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
}