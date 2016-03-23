import todo = require('./todo');
import * as express from 'express';
import * as bodyParser from 'body-parser';

var todos: todo.IToDo[] = [];

var app = module.exports.app = exports.app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json(app._router.stack);
});

router.route('/ToDos/:id')
    .put(function(req, res) {

        var todoMessage = new todo.ToDo(req.params.id, req.body.message, new Date());
        let found = false;
        todos.map((tempToDo) => {
            if (tempToDo.Id === req.params.id) {
                tempToDo.Message = req.body.message;
                found = true;
            }
        });
        if (!found) {
            todos.push(todoMessage);
        }
        res.json(todos);
    });

router.route('/ToDos')
    .get(function(req, res) {
        res.json(todos);

    });

router.route('/ToDos/:id')
    .delete(function(req, res) {
        todos = todos.filter((tempTodo) => {
            return tempTodo.Id !== req.params.id;
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