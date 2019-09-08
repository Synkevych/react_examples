const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', function(req, res, next) {
	Todo.find()
		.then(todos => res.send(todos))
		.then(err => next(err));
});

router.post('/', function(req, res, next) {
	console.log('res', res.body);
	Todo.create(req.body)
		.then(todo => {
			return res.status(201).send(todo);
		})
		.catch(err => next(err));
});

router.delete('/:id', function(req, res, next) {
	Todo.findByIdAndRemove(req.params.id)
		.then(todo => res.send(todo))
		.catch(err => next(err));
});

module.exports = router;
