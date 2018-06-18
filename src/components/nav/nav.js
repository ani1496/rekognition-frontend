import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logoIcon from '../../img/fpl.png';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-item">
          <img src={logoIcon} alt="logo" />
        </div>

        <div className="navbar-end">
          <NavLink to="/byImage" className="navbar-item">
            <span className="icon has-padding-right">
              <i className="fa fa-camera has-margin" />
            </span>
            Search by Image
          </NavLink>
          <NavLink to="/byName" className="navbar-item">
            <span className="icon has-padding-right">
              <i className="fa fa-pencil" />
            </span>
            Search by Name
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
