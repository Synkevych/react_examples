import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default class Navbar extends React.Component {
	static defaultProps = {
		onNewRecipe(){}
	}
	static propTypes = { 
		onNewRecipe: PropTypes.func
	}

	render() {
		return (
			<header>
				<h2>
					<a href='!#' target='_self'>
						Recipe App
					</a>
				</h2>
				<nav>
					<li>
						<a href='!#' onClick={this.props.onNewRecipe}>
							New Recipe
						</a>
					</li>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>About</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</nav>
			</header>
		);
	}
}

