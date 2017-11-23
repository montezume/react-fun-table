import React from 'react';
import { mount, shallow } from 'enzyme';

import Table from '../Table';

import { columns, data } from './testData';

it('renders without crashing', () => {
  shallow(
    <Table
      columns={columns}
      data={data}
      sortBy={columns[0].attribute}
    />
  );
});

it('it sorted our data and when we click sorts again', () => {
  const wrapper = mount(
    <Table
      columns={columns}
      data={data}
      sortBy={columns[0].attribute}
    />
  );

  const sortedData = wrapper.state('data');
  expect(sortedData[0].field_name).toEqual('Potatoes');
  wrapper.instance().handleColumnHeaderClick(columns[0]);
  const nextSortedData = wrapper.state('data');
  expect(nextSortedData[0].field_name).toEqual('Tomatoes');
});

it('it sorted our data when ascending', () => {
  const wrapper = mount(
    <Table
      columns={columns}
      data={data}
      sortBy={columns[0].attribute}
      sortDescending
    />
  );

  const sortedData = wrapper.state('data');
  wrapper.instance().handleColumnHeaderClick(columns[0]);
  expect(sortedData[0].field_name).toEqual('Potatoes');
});
