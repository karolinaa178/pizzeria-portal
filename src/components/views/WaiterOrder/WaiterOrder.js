import React from 'react';
import PropTypes from 'prop-types';
import classes from './WaiterOrder.module.scss';

const WaiterOrder = props => {
  let content = this.props.params.id;
  if(props.match.params.id === 'new'){
    content = 'Add new order ';
  }

  return (
    <div className={classes.component}>
      <h2>Waiter Order view</h2>
      <h3>{content}</h3>
    </div>
  );
};

WaiterOrder.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default WaiterOrder;
