import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = props => {
  return (
    <div>
      <PageNav />
      {props.children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
