import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

const sortString = (a, b, desc) => {
  const reverse = desc ? -1 : 1;

  if (a < b) {
    return -1 * reverse;
  }
  if (a > b) {
    return 1 * reverse;
  }

  return 0;
};

const sort = (data, attribute, sortDescending) => {
  return data.sort((a, b) => {
    const aString = a[attribute].toString().toLowerCase();
    const bString = b[attribute].toString().toLowerCase();
    return sortString(aString, bString, sortDescending);
  });
};

class Table extends Component {

  constructor(props) {
    super(props);

    const { data, sortBy, sortDescending } = this.props;

    const sortedData = sort(data, sortBy, sortDescending);

    this.state = {
      sortBy,
      sortDescending: this.props.sortDescending,
      data: sortedData
    };
  }

  handleColumnClick = (column, row) => {
    // todo
  }

  handleColumnHeaderClick = column => {
    const { data, sortBy, sortDescending } = this.state;
    const nextDirection = sortBy === column.attribute ? !sortDescending : sortDescending;

    this.setState({
      ...this.state,
      sortDescending: nextDirection,
      data: sort(data, column.attribute, nextDirection),
      sortBy: column.attribute
    });
  }

  render() {

    const { columnWidth, columns, numStickyColumns, stickyHeader } = this.props;

    const { data } = this.state;

    return (
      <Grid>
        <TableHeader
          columnWidth={columnWidth}
          columns={columns}
          numStickyColumns={numStickyColumns}
          onColumnHeaderClick={this.handleColumnHeaderClick}
          sticky={stickyHeader}
        />
        <TableBody
          columnWidth={columnWidth}
          columns={columns}
          data={data}
          numStickyColumns={numStickyColumns}
          onColumnClick={this.handleColumnClick}
        />
      </Grid>
    );
  }
}

Table.defaultProps = {
  columnWidth: 100,
  numStickyColumns: 1,
  sortDescending: false,
  stickyHeader: true
};

Table.propTypes = {
  columnWidth: PropTypes.number,
  columns: PropTypes.array,
  data: PropTypes.array,
  numStickyColumns: PropTypes.number,
  sortBy: PropTypes.string,
  sortDescending: PropTypes.bool,
  stickyHeader: PropTypes.bool
};

export default Table;
