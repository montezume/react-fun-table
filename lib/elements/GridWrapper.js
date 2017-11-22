import styled from 'styled-components';

import * as colors from '../styles/colors';

const GridWrapper = styled.div`
  display: grid;
  overflow: auto;
  height: 200px;
  width: 100%;
  border: 1px solid ${colors.mutedGray};
`;

export default GridWrapper;
