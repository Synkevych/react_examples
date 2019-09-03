import React from 'react';
import './App.css';

const TextField = ({ text }) => {
	let style = {
		fontStyle: "Arial"
	};
	return <li style={style}>{text}</li>;
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inpuText: '', data: [] };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		let text = this.state.inpuText.slice();
		console.log('text', text);
		this.setState(state => {
			let newData = state.data.slice();
			newData.push(text);
			return { data: newData, inpuText: '' };
		});
	}
	render() {
		let { inpuText, data } = this.state;
		console.log('this.state', this.state);
		const textField = data.map((text, index) => {
			return <TextField key={index} text={text} />;
		});
		return (
			<div className='app'>
				<h2>Simple ToDo App </h2>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.handleClick(e);
					}}
				>
					<input
						value={inpuText}
						onChange={e => {
							this.setState({ inpuText: e.target.value });
						}}
					/>
					<button>SAVE</button>
				</form>
				<ol>{textField} </ol>
			</div>
		);
	}
}

export default App;
