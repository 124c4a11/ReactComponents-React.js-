import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabsNavItem from './TabsNavItem';

import './Tabs.scss';


export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    className: '',
    vertical: false
  };

  state = {
    activeTab: null
  };

  componentDidMount() {
    const { children = [] } = this.props;
    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = (children) => children.map(({ props }) => props.label)

  setActiveTab = (activeTab) => {
    const { activeTab: currentTab } = this.state;

    if (currentTab !== activeTab) this.setState({ activeTab });
  }

  renderTabs = () => {
    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabsNavItem
        key={ navLabel }
        navLabel={ navLabel }
        className={ classNames({ 'tabs__nav-item_active': activeTab === navLabel }) }
        onChangeActiveTab={ this.setActiveTab }
      />
    ));
  }

  render() {
    const { activeTab } = this.state;
    const {
      children,
      className,
      vertical,
      ...attrs
    } = this.props;

    const classes = classNames(
      'tabs',
      className,
      { 'tabs_vertical': vertical },
    );

    return (
      <div className={ classes } { ...attrs }>
        <div className="tabs__nav">
          { this.renderTabs() }
        </div>
        <div className="tabs__content">
          { React.Children.map(children, (child) => React.cloneElement(child, { activeTab })) }
        </div>
      </div>
    );
  }
};
