import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.scss';


const Badge = (props) => {
  const {
    value,
    inline,
    circle,
    outer,
    warning,
    alert,
    success,
    info,
    className,
    ...attrs
  } = props;

  const text = typeof value === 'string' || value instanceof String;

  const classes = classNames(
    'badge',
    className,
    { 'badge_circle': circle },
    { 'badge_inline': inline },
    { 'badge_outer': outer },
    { 'badge_text': text },
    { 'badge_warning': warning },
    { 'badge_alert': alert },
    { 'badge_success': success },
    { 'badge_info': info }
  );

  return (
    <span
      className={ classes }
      { ...attrs }
    >{ value }</span>
  );
};


Badge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  circle: PropTypes.bool,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
  warning: PropTypes.bool,
  alert: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool
};


Badge.defaultProps = {
  circle: false,
  inline: false,
  outer: false,
  warning: false,
  alert: false,
  success: false,
  info: false
};


export default Badge;
