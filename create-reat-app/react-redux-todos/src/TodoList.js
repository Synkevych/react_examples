import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { addTodo, removeTodo, updateTodo } from './actionCreators';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '', completed: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.task);
		e.target.reset();
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			completed: false
		});
	}
	removeTodo(id) {
		this.props.removeTodo(id);
	}
	toggleTodo(id) {
		console.log('id', this.props);
		this.props.updateTodo(id);
		this.setState({completed: this.props.completed})
	}
	render() {
		let todos = this.props.todos.map((val, index) => (
			<Todo
				completed={val.completed}
				task={val.task}
				key={index}
				toggleTodo={this.toggleTodo.bind(this, val.id)}
				removeTodo={this.removeTodo.bind(this, val.id)}
			/>
		));
		console.log('this.props', this.state);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='task'>Task </label>
					<input
						type='text'
						name='task'
						id='task'
						onChange={this.handleChange}
					/>
					<button>Add a Todo</button>
				</form>
				<ul>{todos}</ul>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	};
}

// function mapDispatchToProps(dispatch){
// 	return {
// 		addTodo: function(task){
// 			dispatch({
// 				type: "ADD_TODO", task
// 			})
// 		}
// 	}
// }

export default connect(
	mapStateToProps,
	{ addTodo, removeTodo, updateTodo }
)(TodoList);
