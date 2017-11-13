import styled from 'styled-components';
import * as colors from '../styles/colors';

const Item = styled.div`
  height: 50px;
  background: white;
  border: 1px solid gray;
  
  &:hover {
    background-color: pink;
  }
  
  ${props => props.header && `
      position: sticky;
      top: 0;
      z-index: 998;
    `}
`;

export default Item;
