import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import RecipeApp from './RecipeApp';
import UseSetState from './useSetState';
import './index.css'

ReactDOM.render(
	<div>
		<UseSetState/>
		<RecipeApp />
	</div>,
	document.getElementById('root')
);
