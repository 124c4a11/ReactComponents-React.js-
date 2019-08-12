import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroupItem.scss';


const ListGroupItem = (props) => {
  let {
    tag: Tag,
    children,
    className,
    disabled,
    active,
    ...attrs
  } = props;

  const classes = classNames(
    'list-group__item',
    className,
    { 'list-group__item_active': active },
    { 'list-group__item_disabled': disabled }
  );

  if (attrs.href && Tag === 'li') Tag = 'a';

  return (
    <Tag
      className={ classes }
      { ...attrs }
    >{ children }</Tag>
  );
};


ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  disabled: PropTypes.bool,
  active: PropTypes.bool
};


ListGroupItem.defaultProps = {
  children: null,
  tag: 'li',
  disabled: false,
  active: false
};

export default ListGroupItem;
