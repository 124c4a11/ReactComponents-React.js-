import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';


function Button(props) {
  const {
    children,
    onClick,
    className,
    disabled,
    active,
    ...attrs
  } = props;

  const classes = classNames(
    'btn',
    className,
    { btn_active: active }
  );

  const Tag = attrs.href ? 'a' : 'button'

  const onClickAction = (e) => {
    if (disabled) e.preventDefault();
    else return onClick(e);
  };

  return (
    <Tag
      onClick={ onClickAction }
      disabled={ disabled }
      className={ classes }
      { ...attrs }
    >{ children }</Tag>
  )
};


Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};


Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false
};


export default Button;
