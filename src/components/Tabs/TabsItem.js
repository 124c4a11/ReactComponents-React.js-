import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabsItem.scss';


const TabsItem = (props) => {
  const {
    label,
    children,
    activeTab,
    ...attrs
  } = props;

  const classes = classNames(
    'tabs__item',
    { 'tabs__item_active': activeTab === label }
  );

  return (
    <div className={ classes } { ...attrs }>
      { children }
    </div>
  )
};


TabsItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string
};


TabsItem.defaultProps = {
  children: null,
  activeTab: ''
};


export default TabsItem;
