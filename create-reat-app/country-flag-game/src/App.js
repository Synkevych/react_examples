import React from 'react';
import './App.css';
import InputCoutry from './InputCoutry';

const Img = (props) =>{
	const {flagUrl} = props;
	return <img className='flag' src={flagUrl} alt='' />;
}

const Result = props => {
	const { text, isCorrect, countryName } = props;
	return (
		<form className='content'>
			{isCorrect ? (
				<p>Correct: {countryName}! </p>
			) : (
				<p>Incorrect! Correct Answer: {countryName}</p>
			)}
			<button type='submit' className='button'>
				Next
			</button>
		</form>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flagUrls: [],
			countryNames: [],
			selectedIndex: [null,null,null,null],
			targeIndex: null,
			isCorrect: false,
			isOpen: false,
			score: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		const allData = 'https://restcountries.eu/rest/v2/all';
		fetch(allData)
			.then(data => data.json())
			.then(data =>
				data.map((arr, index) => {
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

	newGame(countryNames) {
		const selectedIndex = this.state.selectedIndex.map(() =>
		Math.floor(Math.random() * countryNames.length)
		);
		
		const targetIndex =
			selectedIndex[Math.floor(Math.random() * 4)];
		this.setState({ selectedIndex, targetIndex });
	}

	handleClick(event) {
		if (event === this.state.targetCountry) {

			this.setState({ isCorrect: true, isOpen: true});
		} else {
			this.setState({ isCorrect: false, isOpen: true});

		}
	}

	render() {
		const {
			countryNames,
			flagUrls,
			targetIndex,
			selectedIndex,
			isCorrect,
			isOpen
		} = this.state;
		console.log('this.state', selectedIndex, targetIndex);
		const countrys = selectedIndex.map((i) => {
				return countryNames[i];
		});
		return (
			<div className='app'>
				<h2 className='header-title'> Guess The Flag </h2>
				{isOpen ? (
					<Result
						text={'This text'}
						isCorrect={isCorrect}
						countryName={countryNames[targetIndex]}
					/>
				) : (
					<InputCoutry
						name={countrys}
						targetIndex={targetIndex}
						onGuessClick={this.handleClick}
					/>
				)}
				<Img flagUrl={flagUrls[targetIndex]} />
			</div>
		);
	}
}

export default App;
