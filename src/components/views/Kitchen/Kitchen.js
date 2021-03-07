import React from 'react';
import PropTypes from 'prop-types';
import classes from './Kitchen.module.scss';

const Kitchen = props => {
  return (
    <div className={classes.component}>
      <h2>Kitchen view</h2>
    </div>
  );
};

Kitchen.propTypes = {
  children: PropTypes.any,
};

export default Kitchen;
