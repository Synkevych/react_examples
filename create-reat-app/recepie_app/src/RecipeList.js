import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends React.Component {
	constructor(props){
		super(props);
		this.state = { favColor: "red"}
	}

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	};

	render() {
		const recipes = this.props.recipes.map((r, index) => (
			<Recipe key={r.id} {...r} />
		));
		return <div className='recipe-list'>{recipes} {this.state.favColor}</div>;
	}
}

export default RecipeList;