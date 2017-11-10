import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  display: flex;
  flex: 1 0 auto;
  min-width: 100%;
  border-bottom: 1px solid black;
`;

const HeaderItem = styled.div`
  width: 100px;
  flex: 100 0 auto;
  position: relative;
  display: block;
  border-right: 1px solid black;
  padding: 7px 5px;
  
  &:last-child {
    border: 0;
  }
`;

function Header({ columns }) {
  const headerColumns = columns.map((column, index) => (
    <HeaderItem key={index}>{column.label}</HeaderItem>
  ));
  
  return (
    <HeaderDiv>
      { headerColumns }
    </HeaderDiv>
  );
}

export default Header;
