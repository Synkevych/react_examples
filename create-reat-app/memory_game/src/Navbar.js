import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default class Navbar extends React.Component {
	static defaultProps = {
		onNewGame(){}
	};
	static propTypes = {
		onNewGame: PropTypes.func
	};

	render() {
		return (
			<header>
				<h2>
					<a href='!#'>Memory Game</a>
				</h2>
				<nav>
					<li>
						<a href='!#' onClick={this.props.onNewGame}>
							New Game
						</a>
					</li>
				</nav>
			</header>
		);
	}
}
