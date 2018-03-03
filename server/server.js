var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');


var app = express();

app.use(bodyParser.json());

// POST
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(404).send(e);
    });
});

// GET
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(404).send(e);
    })
});

// GET /todos/...
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({});
    }
    
    Todo.findById(id).then((todos) => {
        if(!todos) {
            return res.status(404).send();
        }

        res.send({todos});
    }).catch((e) => {
        res.status(404).send({});
    })

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};