import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  height: 50px;
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgba(0,0,0,0.2);
  
  &:first-child {
    border: 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  
  &:hover {
    background-color: pink;
  }
  
  &:nth-child(2) {
    border: 0;
  }
  
  ${props => props.sticky && `
    background: white;
    top: 0;
    position: sticky;
    z-index: 999;  
  `}
`;

const StyledColumn = styled.div`

  width: 100px;
  flex: 100 0 auto;
  padding: 5px 7px;
  border-right: 1px solid rgba(0,0,0,0.2);
  cursor: pointer;
  
  &:last-child {
    border: 0;
  }

  ${StyledRow}:hover & {
    background-color: pink;
  }


  ${props => props.sticky && `
    background: white;
    left: 0;
    position: sticky;
    z-index: 999;
    `}
`;

function Row({ row, columns, sticky, ...props }) {

  return (
    <StyledRow sticky={sticky}>
      { columns && columns.map((column, index) => {
        return (
          <StyledColumn
            key={index}
            sticky={index === 0}
            {... props}
          >
            {`${column}`}

          </StyledColumn>
        );
      })}
    </StyledRow>
  );
}

Row.defaultProps = {
  sticky: false
};

Row.propTypes = {
  columns: PropTypes.array.isRequired,
  sticky: PropTypes.bool
};

export default Row;
