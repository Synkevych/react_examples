import React from 'react';
import Box from './Box';
import NavBar from './Navbar';
import PropTypes from 'prop-types';

import './App.css';

const cardState = {
	HIDING: 0,
	SHOWING: 0,
	MATCHING: 0
};

let cards = [
	{ id: 0, cardState: cardState.HIDING, backgroundColor: 'red' },
	{ id: 1, cardState: cardState.HIDING, backgroundColor: 'red' },
	{ id: 2, cardState: cardState.HIDING, backgroundColor: 'pink' },
	{ id: 3, cardState: cardState.HIDING, backgroundColor: 'pink' },
	{ id: 4, cardState: cardState.HIDING, backgroundColor: 'blue' },
	{ id: 5, cardState: cardState.HIDING, backgroundColor: 'blue' },
	{ id: 6, cardState: cardState.HIDING, backgroundColor: 'grey' },
	{ id: 7, cardState: cardState.HIDING, backgroundColor: 'grey' },
	{ id: 8, cardState: cardState.HIDING, backgroundColor: 'black' },
	{ id: 9, cardState: cardState.HIDING, backgroundColor: 'black' }
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { cards: shuffle(cards), cardState, defaultColor: '#9fc2c9' };

		this.handleClick = this.handleClick.bind(this);

		function shuffle(cards) {
			return cards.sort(function(a, b) {
				return 0.5 - Math.random();
			});
		}
	}
	getRandomColor() {
		let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
		return this.props.allColors[colorIndex];
	}

	handleClick(id) {
		this.setState((prevState, props) => {
			const { cards, cardState, defaultColor } = Object.assign({}, prevState);

			let newCards = cards.map((card, index) => {
				if (card.id === id) {
					if (cardState.HIDING) {
						//  if 1 color openned
						if (
							card.backgroundColor === cards[cardState.SHOWING].backgroundColor
						) {
							card.cardState = 1;
							cardState.HIDING = 0;
							cardState.SHOWING = 0;
							cardState.MATCHING += 2;
							card.cardState = 1;
							return card;
						} else {
							// color 1 != color 2

							cards[cardState.SHOWING].cardState = 0;
							cardState.HIDING = 0;
							cardState.SHOWING = 0;
							return card
						}
					} else {
						//  if 0 color openned
						cardState.HIDING += 1;
						card.cardState = 1;
						cardState.SHOWING = index;
						return card;
					}
				}
				return card;
			});
			console.log('cards ', cards, cardState);
			return { cards, cardState, defaultColor };
		});
	}
	showClickedBoxColor(card) {
		setInterval(() => {}, 1600);
	}

	render() {
		let { cards, defaultColor } = this.state;
		const boxes = cards.map((color, index) => {
			let bgColor = color.backgroundColor;
			if (!color.cardState) {
				bgColor = defaultColor;
			}
			return (
				<Box
					key={index}
					id={color.id}
					color={bgColor}
					handleClick={this.handleClick}
				/>
			);
		});
		return (
			<div>
				<NavBar
					onNewGame={() =>
						this.setState({
							cards: [
								{ id: 0, cardState: 0, backgroundColor: 'red' },
								{ id: 1, cardState: 0, backgroundColor: 'red' },
								{ id: 2, cardState: 0, backgroundColor: 'pink' },
								{ id: 3, cardState: 0, backgroundColor: 'pink' },
								{ id: 4, cardState: 0, backgroundColor: 'blue' },
								{ id: 5, cardState: 0, backgroundColor: 'blue' },
								{ id: 6, cardState: 0, backgroundColor: 'grey' },
								{ id: 7, cardState: 0, backgroundColor: 'grey' },
								{ id: 8, cardState: 0, backgroundColor: 'black' },
								{ id: 9, cardState: 0, backgroundColor: 'black' }
							],
							cardState: { HIDING: 0, SHOWING: 0, MATCHING: 0 },
							defaultColor: '#9fc2c9'
						})
					}
				/>
				<div className='App'>{boxes}</div>
			</div>
		);
	}
}

export default App;
