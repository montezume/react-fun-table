import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

import { getSortBy, validateColumns } from '../utils/validators';
import { sort } from '../utils/sort';

class Table extends Component {

  constructor(props) {
    super(props);
    const { accessor, columns, data, sortDescending } = this.props;
    let { sortBy } = this.props;

    sortBy = getSortBy(sortBy, columns, accessor);

    this.validate();

    const sortedData = sort(data, sortBy, sortDescending);

    this.state = {
      sortBy,
      sortDescending: this.props.sortDescending,
      data: sortedData
    };
  }

  validate = () => {
    const { accessor, columns } = this.props;
    validateColumns(columns, accessor);
  }

  handleColumnClick = (column, row) => {
    // todo
  }

  handleColumnHeaderClick = column => {
    const { accessor } = this.props;
    const { data, sortBy, sortDescending } = this.state;
    const nextDirection = sortBy === column[accessor] ? !sortDescending : sortDescending;

    this.setState({
      ...this.state,
      sortDescending: nextDirection,
      data: sort(data, column[accessor], nextDirection),
      sortBy: column[accessor]
    });
  }

  render() {

    const { accessor, columnWidth, columns, numStickyColumns, stickyHeader } = this.props;

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
          accessor={accessor}
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
  accessor: 'attribute',
  columnWidth: 100,
  numStickyColumns: 1,
  sortDescending: false,
  stickyHeader: true
};

Table.propTypes = {
  accessor: PropTypes.string,
  columnWidth: PropTypes.number,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  numStickyColumns: PropTypes.number,
  sortBy: PropTypes.string,
  sortDescending: PropTypes.bool,
  stickyHeader: PropTypes.bool
};

export default Table;
