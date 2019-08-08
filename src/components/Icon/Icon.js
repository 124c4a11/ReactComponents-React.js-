import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.scss';


const Icon = (props) => {
  const {
    name,
    size,
    className,
    disabled,
    onClick,
    ...attrs
  } = props;

  const classes = classNames(
    'fa',
    `fa-${name}`,
    className,
    { 'icon_func' : onClick },
    { 'icon_disabled' : disabled }
  );

  const iconSize = size ? { fontSize: `${size}rem`} : null;

  return (
    <span
      onClick={ disabled ? null : onClick }
      className={ classes }
      style={ iconSize }
      { ...attrs }
    />
  );
};


Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};


Icon.defaultProps = {
  name: '',
  className: '',
  disabled: false,
  onClick: null
};


export default Icon;
