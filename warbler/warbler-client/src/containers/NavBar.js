import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo from "../images/warbler-logo.png";
import "./NavBar.css";

class NavBar extends Component {
	logout = e => {
		e.preventDefault();
		this.props.logout()
	}

	render() {
		console.log('this', this.props.currentUser);
		return (
			<nav className='navbar navbar-expand'>
				<div className='container-fluid'>
				<div className="navbar-header">
					<Link to='/' className='navbar-brand'>
						<img src={Logo} alt='Warbler logo' />
					</Link>
				 </div>
				 { this.props.currentUser.isAuthenticated ? (
					 <ul className="nav-nnavbar-nav navbar-right">
						 <li>
							 <Link to={`/user/${this.props.currentUser.user.id}/messages/new`}>New Messages</Link>
						 </li>
						 <li>
							 <a href="null"onClick={this.logout}>Log out</a>
						 </li>
					 </ul> 
				 ): (
				<ul className='nav navbar-nav navbar-right'>
					<li>
						<Link to='/signup'>Sign up</Link>
					</li>
					<li>
						<Link to='/signin'>Log in</Link>
					</li>
				</ul>
				 )}
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(
	mapStateToProps,
	{logout}
)(NavBar);
