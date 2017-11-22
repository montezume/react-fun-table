import React from 'react';
import PropTypes from 'prop-types';

import { Column, Row } from '../elements';

const TableBody = ({ columnWidth, columns, data }) => {
  const stickyColumns = columns.map(column => column.attribute);

  return data && data.map((row, index) => {
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
              columnWidth={columnWidth}
              disabled={disabled}
              index={index}
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
  );
};

TableBody.propTypes = {
  columnWidth: PropTypes.number,
  columns: PropTypes.array,
  data: PropTypes.array
};

export default TableBody;
