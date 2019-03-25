import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';

const Search = (props) => {
	return (
		<div className="Search">
			<h1 className="title">NASA Search</h1>
			<form action="submit">
				<input type="text" placeholder="Search..." onChange={props.handleChange} />
			</form>
			<div className="checkboxes">
				<label htmlFor="images">
					<input type="checkbox" images={props.images} onChange={props.handleImages} />Images
				</label>
				<label htmlFor="audio">
					<input type="checkbox" audio={props.audio} onChange={props.handleAudio} />Audio
				</label>
			</div>
		</div>
	);
};

Search.protoTypes = {
	handleChange: PropTypes.func.isRequired,
	handleImages: PropTypes.func.isRequired,
	handleAudio: PropTypes.func.isRequired,
	images: PropTypes.bool.isRequired,
	audio: PropTypes.bool.isRequired,
};

export default Search;
