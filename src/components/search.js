import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';

const Search = (props) => {
	return (
		<div className="Search">
			<form action="submit" onSubmit={props.handleSubmit}>
				<input type="text" placeholder="The Moon..." onChange={props.handleChange} />
				<button>Search</button>
			</form>
		</div>
	);
};

Search.protoTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Search;
