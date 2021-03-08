import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = props => {
  return (
    <div className={classes.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>Book table</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/:id`}>Edit any booking</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>Add event</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/:id`}>Edit any event</Link>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.any,
};

export default Tables;
