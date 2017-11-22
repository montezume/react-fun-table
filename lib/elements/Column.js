import styled from 'styled-components';
import Row from './Row';
import * as colors from '../styles/colors';

const Column = styled.div`

  width: ${props => props.columnWidth}px;
  flex: ${props => props.columnWidth} 0 auto;
  padding: 5px 7px;
  border-right: 1px solid rgba(0,0,0,0.2);
  cursor: pointer;
  background-color: white;

  &:last-child {
    border: 0;
  }

  ${Row}:hover & {
    background-color: ${colors.green};
    border-color: ${colors.green};
  }

  ${props => props.sticky && `
    background-color: white;
    left: ${props.index * 100}px;
    position: sticky;
    z-index: 9999;
  `}

  ${props => props.disabled && `
    background-color: ${colors.disabledGray};
  `};

`;

export default Column;
