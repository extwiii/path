import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClickhandler and updates state', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.instance().onClickHandler('Test');
    expect(wrapper.state('selectedTopic')).toEqual('Test');
  });
});
