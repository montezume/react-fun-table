import styled from 'styled-components';

const Column = styled.div`
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

export default Column;
