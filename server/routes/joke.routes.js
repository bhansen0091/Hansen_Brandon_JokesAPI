const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get('/api/jokes', JokeController.index);
    app.post('/api/jokes/new', JokeController.create);
    app.get('/api/jokes/random', JokeController.random);
    app.get('/api/jokes/:id', JokeController.show);
    app.put('/api/jokes/:id', JokeController.update);
    app.delete('/api/jokes/:id/delete', JokeController.destroy);
}

