import React from 'react';
import PropTypes from 'prop-types';
import { Grid as GridElement, GridWrapper } from '../elements';

const Grid = ({ children, ...props }) => (
  <GridWrapper>
    <GridElement>{ children }</GridElement>
  </GridWrapper>
);

Grid.propTypes = {
  children: PropTypes.node
};

export default Grid;
