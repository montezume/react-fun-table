import React from 'react';
import { node } from 'prop-types';
import Header from './Header';
import styled from 'styled-components';

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

const TableContainer = styled.div`
  position: relative;
  border: 1px solid rgba(0,0,0,0.1);
  height: 400px;
  display: flex;
  overflow: auto;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: pink;
  width: 100%;
  align-items: stretch;
`;

const RowContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
`;

function Row({ columns }) {
  const Row = columns.map((column, index) => (
    <div key={index}>{column.label}</div>
  ));
  
  return Row;
}

function Table({ columns, data, children }) {
  return (
    <TableContainer>
      <InnerContainer>
        <Header columns={columns} />
        <RowContainer>
          asdf
        </RowContainer>
      </InnerContainer>
    </TableContainer>
  );
}

Table.propTypes = {
  children: node
};

export default Table;

