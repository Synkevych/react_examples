import React from 'react';
import InputCoutry from './InputCoutry';
import PropTypes from 'prop-types';

import './App.css';

const Img = props => {
	const { flagUrl, countryName } = props;
	return <img className='flag' src={flagUrl} alt={countryName} />;
};

Img.propTypes = {
	flagUrl: PropTypes.string.isRequired,
	countryName: PropTypes.string.isRequired
};

const Result = props => {
	const { isCorrect, countryName, onClickNext, score } = props;
	return (
		<form className='main'>
			<div>
				{isCorrect
					? 'Correct: 👍,'
					: 'Incorrect 👎, Correct Answer:'}{' '}
				<strong>{countryName}!</strong>
				<h2 className='score-title'>
					Your score: <strong>{score}</strong>
				</h2>
			</div>
			<button type='submit' className='button' onClick={e => onClickNext(e)}>
				{isCorrect ? 'Next' : 'New Game'}
			</button>
		</form>
	);
};

Result.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	countryName: PropTypes.string.isRequired,
	onClickNext: PropTypes.func.isRequired,
	score: PropTypes.number.isRequired
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flagUrls: [],
			countryNames: [],
			selectedIndex: [null, null, null, null],
			targetIndex: null,
			isCorrect: false,
			isOpen: false,
			score: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	componentDidMount() {
		const allData = 'https://restcountries.eu/rest/v2/all';
		fetch(allData)
			.then(data => data.json())
			.then(data =>
				data.map(arr => {
					const flagUrls = arr.flag;
					const countryNames = arr.name;
					return { flagUrls, countryNames };
				})
			)
			.then(country => {
				country.sort(function(a, b) {
					return 0.5 - Math.random();
				});
				let flagUrls = [];
				let countryNames = [];
				country.filter((country, index) => {
					if (index <= 100) {
						flagUrls[index] = country.flagUrls;
						countryNames[index] = country.countryNames;
						return true;
					} else return false;
				});
				this.newGame(countryNames);
				this.setState({ flagUrls, countryNames });
			});
	}

	newGame(countryNames, isNewGame) {
		let score = isNewGame ? this.state.score : 0;
		let selectedIndex = this.state.selectedIndex.map(() =>
			Math.floor(Math.random() * countryNames.length)
		);

		const targetIndex = selectedIndex[Math.floor(Math.random() * 4)];
		this.setState({ selectedIndex, targetIndex, score: score });
	}

	handleClick(event) {
		const score = this.state.score + 1;
		if (event === this.state.countryNames[this.state.targetIndex]) {
			this.setState({ isCorrect: true, isOpen: true, score: score });
		} else {
			this.setState({ isCorrect: false, isOpen: true });
		}
	}

	handleNext(e) {
		e.preventDefault();
		this.setState({ isOpen: false });
		this.newGame(this.state.countryNames, this.state.isCorrect);
	}

	render() {
		const {
			countryNames,
			flagUrls,
			targetIndex,
			selectedIndex,
			isCorrect,
			isOpen,
			score
		} = this.state;
		const countrys = selectedIndex.map(i => {
			return countryNames[i];
		});

		return (
			<div className='app'>
				<h2 className='header-title'> Guess The Flag </h2>
				{isOpen ? (
					<Result
						isCorrect={isCorrect}
						countryName={countryNames[targetIndex]}
						onClickNext={this.handleNext}
						score={score}
					/>
				) : (
					<InputCoutry name={countrys} onGuessClick={this.handleClick} />
				)}
				{flagUrls.length > 0 ? (
					<Img
						flagUrl={flagUrls[targetIndex]}
						countryName={countryNames[targetIndex]}
					/>
				) : (
					<div className='flag'> Loading ... </div>
				)}
				<footer>
					<div>
						Coded and built with{' '}
						<span role='img' aria-label='heart'>
							❤️
						</span>{' '}
						by{' '}
						<a
							href='https://www.linkedin.com/in/synkevych'
							target='_blank'
							rel='noopener noreferrer'
						>
							Synkevych{' '}
						</a>
					</div>
					Source code available on{' '}
					<a
						href='https://github.com/Synkevych/react_examples/tree/master/create-reat-app/country-flag-game'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
