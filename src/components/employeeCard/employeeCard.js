import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import PersonIcon from '../../img/person.png';

class EmployeeCard extends Component {
  render() {
    return (
     <div className="card employee-card">
        <div className="card-image">
          <figure className="image">
            <img className="has-border" src={PersonIcon}/>
          </figure>
        </div>
        <div className="card-content has-text-left">
          <div className="media">
            <div className="media-content">
              <p className="is-size-6 has-text-weight-bold">Employee Name</p>
            </div>
          </div>

          <div className="content">
            Position: Position in the company
            <br/>
            Email: email@fpl.com
            <br/>
            Manager: Manager Name
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;