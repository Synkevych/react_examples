import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actionCreators';
import { Route } from 'react-router-dom';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}
	handleAdd(val) {
		this.props.addTodo(val);
	}
	removeTodo(id) {
		this.props.removeTodo(id);
	}
	toggleTodo(id) {
		console.log('id', this.props);
		this.props.updateTodo(id);
		this.setState({ completed: this.props.completed });
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
				<Route
					path='/todos/new'
					component={props => (
						<NewTodoForm {...props} handleSubmit={this.handleAdd} />
					)}
				/>
				<Route
					exact
					path='/todos'
					component={() => (
						<div>
							<ul>{todos}</ul>{' '}
						</div>
					)}
				/>
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
