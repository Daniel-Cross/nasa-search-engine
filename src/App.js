import React, { Component } from 'react';
import Search from './components/search';
import getData from './services/getData';

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

	handleImages = () => {
		this.setState({
			images: !this.state.images,
		});
	};

	handleAudio = () => {
		this.setState({
			audio: !this.state.audio,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		getData(this.state.search).then((data) => {
			console.log(data);
			this.setState({ results: data });
		});
	};

	render() {
		const { search, images, audio } = this.state;

		return (
			<div className="App">
				<Search
					search={search}
					handleChange={this.handleChange}
					handleImages={this.handleImages}
					handleAudio={this.handleAudio}
					handleSubmit={this.handleSubmit}
					images={images}
					audio={audio}
				/>
			</div>
		);
	}
}

export default App;
