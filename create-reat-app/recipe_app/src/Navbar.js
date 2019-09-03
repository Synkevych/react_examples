import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
	render() {
		return (
			<header>
				<h2>
					<a href="/">Recipe App</a>
				</h2>
				<nav>
					<li>
						<a href="/">New Recipe</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</nav>
			</header>
		);
	}
}

