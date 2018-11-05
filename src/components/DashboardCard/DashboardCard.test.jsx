import React from 'react';
import { shallow } from 'enzyme';

import DashboardCard from './DashboardCard';

describe('<DashboardCard />', () => {
  it('renders without crash', () => {
    const wrapper = shallow(
      <DashboardCard key={1234} title="My Title" description="My Description" onClick={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
