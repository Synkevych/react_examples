import React, { Component } from 'react';

class InputCountry extends Component {
	static defaultProps = {
		onGuessClick() {}
	};

	constructor(props) {
		super(props);
		this.state = { current: '', disabled: true};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCountryChanged = this.onCountryChanged.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.onGuessClick(this.state.current)
	}

	onCountryChanged(e){
		let currentValue = e.currentTarget.value;
		this.setState({ current: currentValue, disabled: false});
	}

	render() {
		const { name } = this.props;
		const { disabled } = this.state;
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
					<button type='submit' className='button' disabled={disabled}>
						Guess
					</button>
				</form>
			</div>
		);
	}
}

export default InputCountry;
