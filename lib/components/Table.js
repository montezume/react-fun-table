import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';
import { Column, Row } from '../elements';

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
    
  render() {
    
    const { columns, data, onSort, defaultSorted } = this.props;
    
    console.log('defaultSorted', defaultSorted);
    //  a row consists of an entire header columns worth of column data.
    
    let stickyColumns = columns.map(column => column.attribute);
            
    return (
      <Grid>
        <Row sticky>
          { columns && columns.map((column, index) => (
            <Column
              key={index}
              onClick={() => { onSort(column.attribute); }}
              sticky={index === 0}
            >
              { column.label }
            </Column>
          ))}
        </Row>
        { data && data.map((row, index) => {
                    
          const rowColumnsData = [];
          const disabled = row['active'] === false;
          
          for (let i = 0; i < stickyColumns.length; i++) {
            rowColumnsData.push(row[columns[i].attribute]);
          }
          
          return (
            <Row
              columns={rowColumnsData}
              disabled={disabled}
              key={index}
              row={columns[index]}
            >
              { rowColumnsData && rowColumnsData.map((column, index) => {
                return (
                  <Column
                    disabled={disabled}
                    key={index}
                    sticky={index === 0}
                  >
                    {`${column}`}

                  </Column>
                );
              })}
            </Row>
          );
        }
        )}
      </Grid>
    );
  }
}

Table.propTypes = {
  // children: PropTypes.node,
  columns: PropTypes.array,
  data: PropTypes.array,
  defaultSorted: PropTypes.array,
  onSort: PropTypes.func
};

export default Table;
