import React from 'react';
import '../styles/results.css';

const Results = (props) => {
	const { results } = props;
	return results.map((images) => (
		<div id="Results">
			<img src={images} alt={images} className="images" />
		</div>
	));
};

export default Results;
