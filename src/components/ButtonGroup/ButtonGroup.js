import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.scss';


const ButtonGroup = (props) => {
  const {
    children,
    className,
    vertical,
    ...attrs
  } = props;

  const classes = classNames(
    'button-group',
    className,
    { 'button-group_vertical': vertical }
  );

  return (
    <div
      className={ classes }
      { ...attrs }
    >{ children }</div>
  )
};


ButtonGroup.propTypes = {
  children: PropTypes.node,
};


ButtonGroup.defautProps = {
  children: null
};


export default ButtonGroup;
