import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100px;
  flex: 100 0 auto;
  position: relative;
  display: block;
  border-right: 1px solid black;
  border-top: 1px solid black;
  padding: 7px 5px;
  
  &:first-child {
    position: relative;
    z-index: ${props => props.fixed ? '-1' : 1};
    background-color: ${props => props.fixed ? 'purple' : 'red'};

    display: table-cell;
  }
  
  &:last-child {
    border-right: 0;
  }
`;

// use react portal lol

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex: 1 0 auto;
  height: 50px;
`;

function Row({ row, fixed }) {
  console.log('fixed', fixed);
  return (
    <StyledRow>
      { Object.keys(row).map((column, index) => (
        <Div fixed={fixed} key={index}>
          { row[column] }
        </Div>
      ))
      }
    </StyledRow>
  );
}

export default Row;
