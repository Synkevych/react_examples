import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Route from './Route';

const App = () => (
	<div>
		<Link to='/'>Home</Link>
		<Link to='/about'>About</Link>
		<div style={{ fontSize: '3em', margin: '25px' }}>
			<Route />
		</div>
	</div>
);
