import React from 'react';
import PropTypes from 'prop-types';
import classes from './Homepage.module.scss';

const Homepage = props => {
  return (
    <div className={classes.component}>
      <h2>Homepage view</h2>
    </div>
  );
};

Homepage.propTypes = {
  children: PropTypes.any,
};

export default Homepage;
