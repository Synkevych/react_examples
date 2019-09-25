import React, { Component } from 'react';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '', completed: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(this.state.task);
		e.target.reset();
		this.props.history.push("/todos");
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			completed: false
		});
	}
	render() {
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
			</div>
		);
	}
}
