import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '' };
		this.handleChange =this.handleChange.bind(this);
		this.handleSubmit =this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ inputValue: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.addTodo(this.state.inputValue);
		this.setState({ inputValue: ''})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					onChange={e => this.handleChange(e)}
					value={this.state.inputValue}
				/>
				<button>Add Todo </button>
			</form>
		);
	}
}

export default TodoForm;
