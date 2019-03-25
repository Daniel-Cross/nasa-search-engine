import React, { Component } from 'react';
import Search from './components/search';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			images: false,
			audio: false,
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

	render() {
		const { search, images, audio } = this.state;

		return (
			<div className="App">
				<Search
					search={search}
					handleChange={this.handleChange}
					handleImages={this.handleImages}
					handleAudio={this.handleAudio}
					images={images}
					audio={audio}
				/>
			</div>
		);
	}
}

export default App;
