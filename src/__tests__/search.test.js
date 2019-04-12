import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search';
import { shallow } from 'enzyme';
import '../../testSetup';

describe('Search', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Search handleChange={() => null} handleSubmit={() => null} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders the correct prop types', () => {
		const mockHandler = jest.fn();
		const testInput = shallow(<Search handleChange={mockHandler} handleSubmit={mockHandler} />);

		expect(mockHandler).not.toHaveBeenCalled();
		testInput.find('input').simulate('change');
		testInput.find('input').simulate('submit');
		expect(mockHandler).toHaveBeenCalled();
	});
});
