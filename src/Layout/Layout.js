import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';

import './Layout.scss';


export default ({ children }) => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="sidebar__logo-wrap">
          <img src={logo} className="sidebar__logo" alt="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                exact
                to="/"
                className="nav-list__link"
                activeClassName="nav-list__link_active"
              >Button</NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/button_group"
                className="nav-list__link"
                activeClassName="nav-list__link_active"
              >Button Group</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main">{ children }</div>
    </Fragment>
  )
};
