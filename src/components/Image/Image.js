import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.scss';


const Image = (props) => {
  let {
    src,
    alt,
    width,
    height,
    className,
    circle,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    { circle }
  );

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={ src }
      alt={ alt }
      width={ width }
      height={ height }
      className={ classes }
      { ...attrs }
    />
  );
};


Image.propTypes = {
  stc: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  circle: PropTypes.bool
};


Image.defaultProps = {
  src: '',
  alt: '',
  width: 100,
  height: 100,
  circle: false
};


export default Image;
