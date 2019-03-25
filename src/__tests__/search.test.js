import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search';
import { shallow } from 'enzyme';
import '../../testSetup';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Search search="mock search" handleChange={() => null} handleImages={() => null} handleAudio={() => null} />,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
