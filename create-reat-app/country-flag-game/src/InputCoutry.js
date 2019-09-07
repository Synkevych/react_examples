import React, { Component } from 'react';

class InputCountry extends Component {
	static defaultProps = {
		onGuessClick() {}
	};

	constructor(props) {
		super(props);
		this.state = { current: '', buttonName: 'Skip'};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCountryChanged = this.onCountryChanged.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onGuessClick(this.state.current);
	}

	onCountryChanged(e) {
		let currentValue = e.currentTarget.value;
		this.setState({
			current: currentValue,
			buttonName: 'Guess'
		});
	}

	render() {
		const { name } = this.props;
		const { buttonName} = this.state;
		return (
			<div className='main'>
				<form onSubmit={e => this.handleSubmit(e)} className='check'>
					<div className='form-group'>
						<input
							name='nameOfChoice'
							type='radio'
							value={name[0]}
							onChange={this.onCountryChanged}
							id='name1'
						/>
						<label htmlFor='name1'>{name[0]}</label>
					</div>
					<div className='form-group'>
						<input
							type='radio'
							name='nameOfChoice'
							value={name[1]}
							onChange={this.onCountryChanged}
							id='name2'
						/>
						<label htmlFor='name2'>{name[1]}</label>
					</div>
					<div className='form-group'>
						<input
							type='radio'
							name='nameOfChoice'
							value={name[2]}
							onChange={this.onCountryChanged}
							id='name3'
						/>
						<label htmlFor='name3'>{name[2]}</label>
					</div>
					<div className="form-group">

					<input
						type='radio'
						name='nameOfChoice'
						value={name[3]}
						onChange={this.onCountryChanged}
						id='name4'
					/>
					<label htmlFor='name4'>{name[3]}</label>
					</div>
					<button type='submit' className='button'>
						{buttonName}
					</button>
				</form>
			</div>
		);
	}
}

export default InputCountry;
