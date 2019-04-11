import React, { Component } from 'react';
import Search from './components/search';
import Results from './components/results';
import getImages from './services/getImages';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			images: false,
			audio: false,
			results: [],
		};
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		getImages(this.state.search).then((data) => {
			this.setState({
				results: data,
			});
		});
	};

	render() {
		const { search, results } = this.state;

		return (
			<div className="App">
				<Search search={search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
				<Results results={results} />
			</div>
		);
	}
}

export default App;
