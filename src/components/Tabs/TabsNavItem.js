import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabsNavItem.scss';


const TabsNavItem = (props) => {
  const {
    navLabel,
    onChangeActiveTab,
    className
  } = props;

  const classes = classNames(
    'tabs__nav-item',
    className
  );

  return (
    <button
      className={ classes }
      onClick={ () => { onChangeActiveTab(navLabel); } }
    >{ navLabel }</button>
  )
};


TabsNavItem.propTypes = {
  navLabel: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func,
  className: PropTypes.string
};


TabsNavItem.defaultProps = {
  navLabel: 'Tab',
  className: '',
  onChangeActiveTab: () => {}
};


export default TabsNavItem;
