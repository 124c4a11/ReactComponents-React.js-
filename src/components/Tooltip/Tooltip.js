import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tooltip.scss';


export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    style: PropTypes.objectOf(PropTypes.string)
  };

  static defaultProps = {
    content: 'Tooltip',
    style: {},
    position: 'top'
  };

  state = {
    isVisible: false
  };

  setVisibility = (isVisible) => {
    this.setState({ isVisible });
  };

  show = () => this.setVisibility(true);

  hide = () => this.setVisibility(false);

  render() {
    const {
      children,
      content,
      position,
      style
    } = this.props;

    const { isVisible } = this.state;

    const classes = classNames(
      'tooltip__content',
      { 'tooltip__content_top': position === 'top' },
      { 'tooltip__content_right': position === 'right' },
      { 'tooltip__content_bottom': position === 'bottom' },
      { 'tooltip__content_left': position === 'left' },
    );

    return (
      <span className="tooltip">
        {
          isVisible &&
          <span style={ style } className={ classes }>{ content }</span>
        }

        <span
          onMouseEnter={ this.show }
          onMouseLeave={ this.hide }
          className="tooltip__target-elem"
        >{ children }</span>
      </span>
    )
  };
};
