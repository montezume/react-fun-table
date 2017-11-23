import React from 'react';
import { mount, shallow } from 'enzyme';

import Grid from '../Grid';

it('renders without crashing', () => {
  shallow(<Grid  />);
});

it('renders children', () => {
  const wrapper = mount(
    <Grid>
      <div id="test">test</div>
    </Grid>
  );
  expect(wrapper.find('#test').length).toBe(1);
});
