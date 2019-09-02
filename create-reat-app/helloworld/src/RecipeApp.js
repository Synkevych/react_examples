import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component{
	render(){
		return (
			<div>
				<Recipe
					title='Pasta'
					ingredients={['flour', 'water']}
					instructions='Mix ingredients'
					img='spaghetti.jpg'
				/>
			</div>
		);
	}
}

export default RecipeApp;