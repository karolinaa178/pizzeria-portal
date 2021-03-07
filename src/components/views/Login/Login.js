import React from 'react';
import PropTypes from 'prop-types';
import classes from './Login.module.scss';

const Login = props => {
  return (
    <div className={classes.component}>
      <h2>Login view</h2>
    </div>
  );
};

Login.propTypes = {
  children: PropTypes.any,
};

export default Login;
