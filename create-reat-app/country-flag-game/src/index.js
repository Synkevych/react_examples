import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(
	'👋🙂 Hello! I am open for new opportunity 🏢👨‍💻💼. https://www.linkedin.com/in/synkevych'
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
