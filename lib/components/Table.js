import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

//
/*
Create a reusable react component for a dynamic DataTable. These requirements should be fulfilled to provide a good user experience:

- the header row should be fixed as the user scrolls vertical
- the first column should be fixed as the user scrolls horizontal
- the current row should be highlighted as it is hovered with a cursor (incl. the first column)

By default it expects to receive an array of objects with a flat structure.
Every key should be able to be shown as a column. Further configurations might be passed
to define labels for keys or sorting information. Although styling is less important the following mockup can be used as a reference.

*/

/*
const data = [
	{
		"field_name": "...",
		"area_in_hectares": 0.1,
		"active": true,
		"company_name": "...",
		"cultivation_id": 1,
		"crop_name": "...",
		"harvest_year": 2017
	}
];
*/

/*
const columns = [
	{
		"attribute": "field_name",
		"label": "Name"
	},
	{
		"attribute": "cultivation_id",
		"label": "Nummer"
	},
	{
		"attribute": "company_name",
		"label": "Betrieb"
	},
	{
		"attribute": "area_in_hectares",
		"label": "Fläche"
	},
	{
		"attribute": "active",
		"label": "Aktiv"
	},
	{
		"attribute": "crop_name",
		"label": "Kultur"
	},
	{
		"attribute": "harvest_year",
		"label": "Ernte"
	}
];
*/

//
// onSort = (attribute, sortDirection) => {
//   const sortedData = data.sort((a, b) => {
//     return sortDirection === -1 ? (a[attribute] > b[attribute]) : a[attribute] < b[attribute];
//   });
//
//   this.setState({
//     ...this.state,
//     data: sortedData,
//     sortDirection: this.state.sortDirection == 1 ? -1 : 1
//   });
// }
//

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

  sortData = () => {

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
  defaultSorted: null,
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
