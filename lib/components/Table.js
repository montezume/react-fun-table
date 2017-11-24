import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

import defaultProps from './defaultProps';
import { getSortBy, validateColumns } from '../utils/validators';
import { sort } from '../utils/sort';

class Table extends Component {

  constructor(props) {
    super(props);
    const { data, sortDescending, sortBy } = this.props;

    this.validate();

    this.state = {
      sortBy,
      sortDescending,
      data
    };
  }

  validate = () => {
    const { accessor, columns } = this.props;
    validateColumns(columns, accessor);
  }

  handleColumnClick = (column, row) => {
    const { onColumnClick } = this.props;
    onColumnClick(column, row);
  }

  handleColumnHeaderClick = column => {
    const { accessor } = this.props;
    const { sortBy, sortDescending } = this.state;
    const nextDirection = sortBy === column[accessor] ? !sortDescending : sortDescending;

    this.setState({
      ...this.state,
      sortDescending: nextDirection,
      sortBy: column[accessor]
    });
  }

  render() {

    const { accessor, data, columnWidth, columns, numStickyColumns, stickyHeader } = this.props;
    const { sortDescending } = this.state;
    let { sortBy } = this.state;
    sortBy = getSortBy(sortBy, columns, accessor);
    const sortedData = sort(data, sortBy, sortDescending);

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
          accessor={accessor}
          columnWidth={columnWidth}
          columns={columns}
          data={sortedData}
          numStickyColumns={numStickyColumns}
          onColumnClick={this.handleColumnClick}
        />
      </Grid>
    );
  }
}

Table.defaultProps = defaultProps;

Table.propTypes = {
  accessor: PropTypes.string,
  columnWidth: PropTypes.number,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  numStickyColumns: PropTypes.number,
  onColumnClick: PropTypes.func,
  sortBy: PropTypes.string,
  sortDescending: PropTypes.bool,
  stickyHeader: PropTypes.bool
};

export default Table;
