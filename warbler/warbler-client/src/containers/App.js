import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import { setAthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from "jwt-decode";

const store = configureStore();

//rehydrate using localStorage and jwtDecode

if(localStorage.jwtToken){
	setAthorizationToken(localStorage.jwtToken);
	// prevent someone from manually tampering with the key of jwtToken in localStorage
console.log("localStorage.jwtToken",localStorage.jwtToken);
console.log('jwtToken Decode', jwtDecode(localStorage.jwtToken));
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
	} catch (error) {
		store.dispatch(setCurrentUser({}))
	}
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="onboarding">
					<NavBar />
					<Main />
				</div>
			</Router>
		</Provider>
	);
};

export default App;
