import React from 'react';
import { NavLink } from 'react-router-dom';
import SwitchDemo from './Route';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const active = {textDecoration: 'none', cursor:'default', color: 'grey'};
		const defaultStyle ={
			margin: '5px'
		}
		return ( <div className='app'>
	<NavLink exact style={defaultStyle} activeStyle={active} to="/">Home</NavLink>
	<NavLink exact style={defaultStyle} activeStyle={active} to="/about">About</NavLink>
		<SwitchDemo/>
		</div>
					)
	}
}

export default App;
