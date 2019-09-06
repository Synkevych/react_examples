import React from 'react';
import TodoItem from './TodoItem';

const APIURL = 'api/todos';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}

	componentDidMount() {
		this.loadTodos();
	}
	loadTodos() {
		fetch(APIURL)
			.then(resp => {
				if (!resp.ok) {
					if (resp.status >= 400 && resp.status < 500) {
						return resp.json().then(data => {
							let err = { errorMessage: data.message };
							throw err;
						});
					} else {
						let err = {
							errorMessage: 'Please try again later, server not response.'
						};
						throw err;
					}
				}
				return resp.json();
			})
			.then(todos => this.setState({ todos }));
	}

	render() {
		const todos = this.state.todos.map(t => <TodoItem key={t._id} {...t} />);
		console.log('this.state', this.state);
		return (
			<div>
				<h2>Todo List!</h2>
				<ul>{todos} {}</ul>
			</div>
		);
	}
}
export default TodoList;
