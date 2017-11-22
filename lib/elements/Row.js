import styled from 'styled-components';
import * as colors from '../styles/colors';

const Row = styled.div`
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
    border-color: 1px solid ${colors.green};
  }

  &:nth-child(2) {
    border: 0;
  }

  ${props => props.sticky && `
    // background: white;
    top: 0;
    position: sticky;
    z-index: 99999;
  `}
`;

export default Row;
