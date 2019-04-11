import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../components/results';
import { shallow } from 'enzyme';
import '../../testSetup';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Results />, div);
	ReactDOM.unmountComponentAtNode(div);
});
