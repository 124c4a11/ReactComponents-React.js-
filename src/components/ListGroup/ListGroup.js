import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.scss';


const ListGroup = (props) => {
  let {
    tag: Tag,
    children,
    className,
    ...attrs
  } = props;

  const classes = classNames(
    'list-group',
    className
  );

  return (
    <Tag className={ classes } { ...attrs }>
      { children }
    </Tag>
  )
};


ListGroup.propTypes = {
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  children: PropTypes.node
};


ListGroup.defaultProps = {
  tag: 'ul',
  children: null
};


export default ListGroup;
