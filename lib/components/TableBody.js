import React from 'react';
import PropTypes from 'prop-types';

import { Column, Row } from '../elements';

const TableBody = ({ columnWidth, columns, data, numStickyColumns, onColumnClick }) => {
  const attributes = columns.map(column => column.attribute);

  return data && data.map((row, index) => {

    const rowColumnsData = [];
    const disabled = row['active'] === false;

    for (let i = 0; i < attributes.length; i++) {
      const obj = {
        attribute: attributes[i],
        value: row[attributes[i]]
      };
      rowColumnsData.push(obj);
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
              columnWidth={columnWidth}
              disabled={disabled}
              index={index}
              key={index}
              onClick={() => onColumnClick(column, row)}
              sticky={index < numStickyColumns}
            >
              {`${column.value}`}

            </Column>
          );
        })}
      </Row>
    );
  }
  );
};

TableBody.propTypes = {
  columnWidth: PropTypes.number,
  columns: PropTypes.array,
  data: PropTypes.array,
  numStickyColumns: PropTypes.number,
  onColumnClick: PropTypes.func
};

export default TableBody;
