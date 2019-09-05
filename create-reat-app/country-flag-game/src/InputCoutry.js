import React, { Component } from 'react';

class InputCountry extends Component {
	static defaultProps = {
		onGuessClick() {}
	};

	constructor(props) {
		super(props);
		this.state = { current: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCountryChanged = this.onCountryChanged.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('checked', this.state);

		this.props.onGuessClick(this.state.current)
	}

	onCountryChanged(e){
		let currentValue = e.currentTarget.value;
		console.log("value", currentValue);
		this.setState({ current:  currentValue });
	}

	render() {
		const { name, targetCountry } = this.props;
		console.log("name", name, targetCountry);
		return (
			<div className='content'>
				<form onSubmit={e => this.handleSubmit(e)}>
					<label>
						<input
							name='nameOfChoice'
							type='radio'
							value={name[0]}
							onChange={this.onCountryChanged}
						/>
						{name[0]}
					</label>
					<label>
						<input
							type='radio'
							name='nameOfChoice'
							value={name[1]}
							onChange={this.onCountryChanged}
						/>
						{name[1]}
					</label>
					<label>
						<input
							type='radio'
							name='nameOfChoice'
							value={name[2]}
							onChange={this.onCountryChanged}
						/>
						{name[2]}
					</label>
					<label>
						<input
							type='radio'
							name='nameOfChoice'
							value={name[3]}
							onChange={this.onCountryChanged}
						/>
						{name[3]}
					</label>
					<button type='submit' className='button'>
						Guess
					</button>
				</form>
			</div>
		);
	}
}

// InputCountry.PropTypes = {
// 	name: PropTypes.arrayOf.isRequired,
// 	onClick: PropTypes.func.isRequired
// }

export default InputCountry;
