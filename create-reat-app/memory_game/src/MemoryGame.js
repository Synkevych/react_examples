import React from 'react';
import Box from './Box';
import NavBar from './Navbar';

import './MemoryGame.css';

/*
	A card can be 1 of 3 CardState
	HIDING - the card is not being shown
	SHOWING - the card is being shown but does't have a match yet 
	MATCHING - the card is being shown and has a match. 
			   the card should never more from MATCHING, to ann
			   other state 
*/

const CardState = {
	HIDING: 0,
	SHOWING: 1,
	MATCHING: 2
};

let cards = [
	{ id: 0, cardState: CardState.HIDING, backgroundColor: 'red' },
	{ id: 1, cardState: CardState.HIDING, backgroundColor: 'red' },
	{ id: 2, cardState: CardState.HIDING, backgroundColor: 'pink' },
	{ id: 3, cardState: CardState.HIDING, backgroundColor: 'pink' },
	{ id: 4, cardState: CardState.HIDING, backgroundColor: 'blue' },
	{ id: 5, cardState: CardState.HIDING, backgroundColor: 'blue' },
	{ id: 6, cardState: CardState.HIDING, backgroundColor: 'grey' },
	{ id: 7, cardState: CardState.HIDING, backgroundColor: 'grey' },
	{ id: 8, cardState: CardState.HIDING, backgroundColor: 'black' },
	{ id: 9, cardState: CardState.HIDING, backgroundColor: 'black' }
];

class MemoryGame extends React.Component {
	constructor(props) {
		super(props);
		cards = this.shuffle(cards);
		this.state = { cards, noClick: false };

		this.handleClick = this.handleClick.bind(this);
		this.handleNewGame = this.handleNewGame.bind(this);
	}
	shuffle(cards) {
		return cards.sort(function(a, b) {
			return 0.5 - Math.random();
		});
	}

	handleClick(id) {
		const mapCardState = (cards, idsToChange, newCardState) => {
			return cards.map(card => {
				if (idsToChange.includes(card.id)) {
					return {
						...card,
						cardState: newCardState
					};
				}
				return card;
			});
		};

		const foundCard = this.state.cards.find(card => card.id === id);
		if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
			return;
		}
		let noClick = false;
		let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

		const showingCards = cards.filter(
			card => card.cardState === CardState.SHOWING
		);
		const ids = showingCards.map(card => card.id);
		if(showingCards.length === 2 && 
			showingCards[0].backgroundColor === showingCards[1].backgroundColor)
			{
				cards = mapCardState(cards, ids, CardState.MATCHING);
			}else if(showingCards.length === 2 ){
				let hidingCards = mapCardState(cards, ids, CardState.HIDING);

				noClick = true;

				this.setState({ cards, noClick }, () => {
					setTimeout( () => {
						this.setState({cards : hidingCards, noClick: false })
					}, 1300)
				});
				return;
			}
			this.setState({ cards, noClick });
	}

	handleNewGame() {
		let cards = this.state.cards.map(c => ({
			...c,
			cardState: CardState.HIDING
		}));
		cards = this.shuffle(cards);
		this.setState({ cards });
		console.log('this.state', this.state);
	}

	render() {
		let { cards } = this.state;
		const boxes = cards.map((card, index) => {
			console.log(card.cardState !== CardState.HIDING);
			return (
				<Box
					key={index}
					id={card.id}
					backgroundColor={card.backgroundColor}
					onClick={() => this.handleClick(card.id)}
					showing={card.cardState !== CardState.HIDING}
				/>
			);
		});
		return (
			<div>
				<NavBar onNewGame={this.handleNewGame} />
				<div className='App'>{boxes}</div>
			</div>
		);
	}
}

export default MemoryGame;
