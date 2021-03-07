import React from 'react';
import PropTypes from 'prop-types';
import classes from './TablesEvents.module.scss';

const TablesEvents = props => {
  let content = this.props.params.id;
  if(props.match.params.id === 'new'){
    content = 'Add new event';
  }

  return (
    <div className={classes.component}>
      <h2>Tables Events view</h2>
      <h3>{content}</h3>
    </div>
  );
};

TablesEvents.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default TablesEvents;
