import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';

import './RecipeApp.css';

class RecipeApp extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='recipe'>
					<RecipeList/>
				</div>
			</div>
		);
	}
}

export default RecipeApp;
