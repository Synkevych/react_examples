import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stories: []
		};
	}
	componentDidMount() {
		const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
		const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
		fetch(topStories)
			.then(data => data.json())
			.then(data =>
				data.map(id => {
					const url = `${storyUrlBase}${id}.json`;
					return fetch(url).then(d => d.json());
				})
			)
			.then(promises => Promise.all(promises))
			.then(stories => this.setState({ stories }));
	}
	render() {
		let views = <div>Loading ... </div>;
		const { stories } = this.state;
		if(stories && stories.length > 0 ){
			views = stories.map(site => (
				<p key={site.id}>
					<a href={site.url}>{site.title}</a> from <strong>{site.by}</strong>
				</p>
			))
		}
		return (
			<div className='app'>
				<h2>Hacker News Top Stories </h2>
				{views}
			</div>
		);
	}
}

export default App;
