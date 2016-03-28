/// <reference path="../../typings/main.d.ts" />

import todo = require('./todo');
import * as express from 'express';
import * as bodyParser from 'body-parser';
import todosINamedThisNamespaceBadly = require('./todos');

var todos: todo.IToDo[] = [];

var app = module.exports.app = exports.app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var host = `http://localhost:${port}`;
var urls = { get: '/ToDos',
    delete: '/ToDos/:id' ,
    put: '/ToDos/:id' ,
    post: '/ToDos/' 
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
    next();
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json(urls);
});

router.route(urls.put)
    .put(function(req, res) {
console.log(req.body);
        var todoMessage = new todo.ToDo(req.params.id, req.body.message, new Date(), 
                        [{rel: 'delete', url: `${host}/ToDos/${req.params.id}`}, 
                         {rel: 'put', url: `${host}/ToDos/${req.params.id}`}]);
        let found = false;
        todos.map((tempToDo) => {
            if (tempToDo.id === req.params.id) {
                tempToDo.message = req.body.message;
                found = true;
            }
        });
        if (!found) {
            todos.push(todoMessage);
        }
        res.json(todos);
    });

router.route(urls.post)
    .post(function(req, res) {
console.log(req.body);
        var todoMessage = new todo.ToDo(todos.length + 1, req.body.message, new Date(), 
                        [{rel: 'delete', url: `${host}/ToDos/${req.params.id}`}, 
                         {rel: 'put', url: `${host}/ToDos/${req.params.id}`}]);
        let found = false;
        todos.map((tempToDo) => {
            if (tempToDo.id === req.params.id) {
                tempToDo.message = req.body.message;
                found = true;
            }
        });
        if (!found) {
            todos.push(todoMessage);
        }
        res.json(todoMessage);
    });

router.route(urls.get)
    .get(function(req, res) {
        res.json(new todosINamedThisNamespaceBadly.ToDos(todos, 
        [{rel: 'get', url: `${host}/ToDos/`},
         {rel: 'put', url: `${host}/ToDos/:id`},
         {rel: 'post', url: `${host}/ToDos/` }] ));

    });

router.route(urls.delete)
    .delete(function(req, res) {
        console.log(req.params.id);
        todos = todos.filter((tempTodo) => {
            return tempTodo.id !== +req.params.id;
        });
        res.json(todos);

    });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);