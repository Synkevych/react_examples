import React from 'react';
import InputCoutry from './InputCoutry';
import PropTypes from 'prop-types';
import Footer from './Footer';

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
				{isCorrect ? 'Correct: 👍,' : 'Incorrect 👎, Correct Answer:'}{' '}
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
			selectedCountrysIndex: [null, null, null, null],
			targetIndex: null,
			isCorrect: false,
			isOpen: false,
			score: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	componentDidMount() {
		this.newGame();
	}
	newGame() {
		const APIURL = 'https://restcountries.eu/rest/v2/all';
		fetch(APIURL)
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
				country.forEach((country, index) => {
					flagUrls[index] = country.flagUrls;
					countryNames[index] = country.countryNames;
				});
				this.nextCountry(countryNames, false);
				this.setState({ flagUrls, countryNames });
			});
	}
	removeCountryFromState(countryNames, id) {
		const countryName = countryNames[id];
		const newCountrys = countryNames.filter(country => country !== countryName);
		const newFlagUrls = this.state.flagUrls.filter(
			(flag, index) => index !== id
		);
		this.setState({ countryNames: newCountrys, flagUrls: newFlagUrls });
	}
	getRandom = val => Math.floor(Math.random() * val);
	nextCountry(countryNames, isNewGame, skipRemoving) {
		if (countryNames === false) {
			this.newGame();
		} else {
			let score = this.state.score;
			if (!skipRemoving) {
				this.removeCountryFromState(countryNames, this.state.targetIndex);
				score = isNewGame ? this.state.score : 0;
			}

			let selectedCountrysIndex = this.state.selectedCountrysIndex.map(() =>
				this.getRandom(this.state.countryNames.length)
			);

			const targetIndex =
				selectedCountrysIndex[this.getRandom(selectedCountrysIndex.length)];
			this.setState({
				selectedCountrysIndex,
				targetIndex,
				score: score
			});
		}
	}

	handleClick(event) {
		if (event) {
			const score = this.state.score + 1;
			if (event === this.state.countryNames[this.state.targetIndex]) {
				this.setState({ isCorrect: true, isOpen: true, score: score });
			} else {
				this.setState({ isCorrect: false, isOpen: true });
			}
		} else {
			this.nextCountry(this.state.countryNames, false, true);
		}
	}

	handleNext(e) {
		e.preventDefault();
		this.setState({ isOpen: false });
		if (this.state.isCorrect) {
			this.nextCountry(this.state.countryNames, this.state.isCorrect);
		} else {
			this.nextCountry(false, this.state.isCorrect);
		}
	}

	render() {
		const {
			countryNames,
			flagUrls,
			targetIndex,
			selectedCountrysIndex,
			isCorrect,
			isOpen,
			score
		} = this.state;
		const countrys = selectedCountrysIndex.map(i => {
			return countryNames[i];
		});

		return (
			<div className='app'>
				<h2 className='header-title'> Guess The Flag</h2>
				{isOpen ? (
					<Result
						isCorrect={isCorrect}
						countryName={countryNames[targetIndex]}
						onClickNext={this.handleNext}
						score={score}
					/>
				) : (
					<div className='question-form'>
						<p className='question-title'>
							Questions {score + 1} from {countryNames.length}
						</p>
						<InputCoutry name={countrys} onGuessClick={this.handleClick} />
					</div>
				)}
				{flagUrls.length > 0 ? (
					<Img
						flagUrl={flagUrls[targetIndex]}
						countryName={countryNames[targetIndex]}
					/>
				) : (
					<div className='flag'> Loading ... </div>
				)}
				<Footer />
			</div>
		);
	}
}

export default App;
