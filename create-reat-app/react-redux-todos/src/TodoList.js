import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch({
			type: 'ADD_TODO',
			task: this.state.task
		});
	e.target.reset()
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		let todos = this.props.todos.map((val, index) => (
			<Todo task={val.task} key={index} />
		));
		console.log("todos",todos);
		console.log("this.props",this.props);
		console.log("this.props",this.props);
		console.log("this.state",this.state);
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

export default connect(mapStateToProps)(TodoList);
