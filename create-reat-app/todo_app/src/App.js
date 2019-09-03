import React from 'react';
import './App.css';

const TodoItem = ({ text }) => {
	let style = {
		fontStyle: 'Arial'
	};
	return <li style={style}>{text}</li>;
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inpuText: '', todos: [] };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		const TODOS = [...this.state.todos, this.state.inpuText];
		console.log(TODOS);
		this.setState({ todos: TODOS, inpuText: '' });
	}
	/* My solution 
	handleClick(e) {
		e.preventDefault();
		let text = this.state.inpuText.slice();
		this.setState(state => {
			let newData = state.todos.slice();
			newData.push(text);
			return { todos: newData, inpuText: '' };
		});
	}
	*/
	render() {
		let { inpuText, todos } = this.state;
console.log("this.state", this.state.todos);
		const todo = todos.map((text, index) => {
			return <TodoItem key={index} text={text} />;
		});
		return (
			<div className='app'>
				<h2>Simple ToDo App </h2>
				<form onSubmit={e => this.handleClick(e)}>
					<input
						type='text'
						autoComplete='off'
						name='inpuText'
						value={inpuText}
						onChange={e => {
							this.setState({ [e.target.name]: e.target.value });
						}}
					/>
					<button type='submit'>SAVE</button>
				</form>
				<ol>{todo} </ol>
			</div>
		);
	}
}

export default App;
