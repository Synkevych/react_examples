const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todosSchema = new mongoose.Schema({
	task: String
})

const Todo = mongoose.model("Todo", todosSchema)

module.exports = Todo; 

