import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.scss';


const Input = (props) => {
  const {
    id,
    label,
    required,
    error,
    className,
    ...attrs
  } = props;

  const classes = classNames(
    'input__field',
    className,
    { 'input__field_error': error }
  );

  return (
    <div className="input">
      {
        label && <label className="input__label" htmlFor={ id }>{ label }</label>
      }
      {
        required && <div className="input__required-label">Required</div>
      }
      <input
        id={ id }
        name={ id }
        className={ classes }
        { ...attrs }
      />
      {
        error && <div className="input__error-msg">{ error }</div>
      }
    </div>
  )
};


Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string
};


export default Input;
