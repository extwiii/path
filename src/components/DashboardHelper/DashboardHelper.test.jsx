import React from 'react';
import { shallow } from 'enzyme';

import DashboardHelper from './DashboardHelper';

describe('<DashboardHelper />', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<DashboardHelper />);
    expect(wrapper).toMatchSnapshot();
  });
});
