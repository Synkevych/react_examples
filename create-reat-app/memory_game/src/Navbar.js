import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
	render() {
		return (
				<header>
					<h2>
						<a href='!#'>Memory Game</a>
					</h2>
					<nav>
							<li>
								<a href='!#'>New Game</a>
							</li>
					</nav>
				</header>
		);
	}
}

