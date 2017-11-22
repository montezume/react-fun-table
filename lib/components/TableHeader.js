import React from 'react';
import PropTypes from 'prop-types';

import { Column, Row } from '../elements';

const TableHeader = ({ columnWidth, columns, onColumnHeaderClick, sticky, numStickyColumns, ...props }) => {
  return (
    <Row
      sticky={sticky}
      {...props}
    >
      { columns && columns.map((column, index) => (
        <Column
          columnWidth={columnWidth}
          index={index}
          key={index}
          onClick={() => onColumnHeaderClick(column)}
          sticky={index < numStickyColumns}
        >
          { column.label }
        </Column>
      ))}
    </Row>
  );
};

TableHeader.defaultProps = {
  sticky: true,
  numStickyColumns: 1
};

TableHeader.propTypes = {
  columnWidth: PropTypes.number,
  columns: PropTypes.array,
  numStickyColumns: PropTypes.number,
  onColumnHeaderClick: PropTypes.func,
  sticky: PropTypes.bool
};

export default TableHeader;
