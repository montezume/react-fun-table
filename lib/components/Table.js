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

class Table extends Component {

  state = {
    sortTest: false
  };

  handleColumnHeaderClick = column => {
    console.log('column', column);
  }

  render() {

    const { columnWidth, columns, data, stickyHeader } = this.props;

    return (
      <Grid>
        <TableHeader
          columnWidth={columnWidth}
          columns={columns}
          onColumnHeaderClick={this.handleColumnHeaderClick}
          sticky={stickyHeader}
        />
        <TableBody
          columnWidth={columnWidth}
          columns={columns}
          data={data}
        />
      </Grid>
    );
  }
}

Table.defaultProps = {
  columnWidth: 100,
  stickyHeader: true
};

Table.propTypes = {
  // children: PropTypes.node,
  columnWidth: PropTypes.number,
  columns: PropTypes.array,
  data: PropTypes.array,
  // defaultSorted: PropTypes.array,
  // onSort: PropTypes.func,
  stickyHeader: PropTypes.bool
};

export default Table;
