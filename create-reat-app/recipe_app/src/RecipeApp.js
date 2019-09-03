import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import './RecipeInput.css';

import './RecipeApp.css';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: [
				{
					id: 0,
					title: 'Spaghetti',
					instructions:
						'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
					ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
					img: 'spaghetti.jpg'
				},
				{
					id: 1,
					title: 'Milkshake',
					instructions: 'Combine ice cream and milk.  Blend until creamy',
					ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
					img: 'milkshake.jpg'
				},
				{
					id: 2,
					title: 'Avocado Toast',
					instructions:
						'Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.',
					ingredients: [
						'2 slices of bread',
						'1 avocado',
						'1 tablespoon olive oil',
						'1 pinch of salt',
						'pepper'
					],
					img: 'avocado-toast.jpg'
				}
			],
			nextRecipeId: 3,
			showForm: false
		};

		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = { id: prevState.nextRecipeId, ...recipe };
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				recipe: [...this.state.recipe, newRecipe],
				showForm: false
			};
		});
	}
	onDelete(id) {
		const recipe = this.state.recipe.filter(recipe => recipe.id !== id);
		//recipes has all except one with the same id in parameter
		console.log('recipes', recipe, id );
		this.setState({ recipe });
	}

	render() {
		const { showForm } = this.state;
		return (
			<div>
				<Navbar onNewRecipe={() => this.setState({ showForm: true })} />
				{showForm ? (
					<RecipeInput
						onSave={this.handleSave}
						onClose={() => this.setState({ showForm: false })}
					/>
				) : null}
				<div className='recipe'>
					<RecipeList onDelete={this.onDelete} recipes={this.state.recipe} />
				</div>
			</div>
		);
	}
}

export default RecipeApp;
