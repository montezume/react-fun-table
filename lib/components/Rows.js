import React from 'react';
import styled from 'styled-components';

import Row from './Row';

const RowsContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: calc(100% - 50px);
  flex-direction: column;
`;

function Rows({ rows, fixed }) {
  return (
    <RowsContainer>
      { rows && rows.map((row, index) => (
        <Row
          key={index}
          fixed={fixed}
          row={row}
        />
      ))}
    </RowsContainer>
  );
}

export default Rows

/*
<div>
  { rowData.map((row, index) => {
    return (
      <div key={index}>
        { Object.keys(row).map((column, index) => (
          <div key={index}>
            { row[column] }
          </div>
        ))}
      </div>
    );
  })
  }
</div>
*/
