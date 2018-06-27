import React from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import PersonIcon from '../../img/person.png';


const EmployeeCard = props => {
  
  const { name = 'Employee Name', position, email, manager} = props.employee;

  return (
    <div className="card employee-card">
      <div className="card-image">
        <figure className="image">
          <img className="has-border" src={PersonIcon} alt="employee" />
        </figure>
      </div>
      <div className="card-content has-text-left">
        <div className="media">
          <div className="media-content">
            <p className="is-size-6 has-text-weight-bold">{name}</p>
          </div>
        </div>

        <div className="content">
          Position: {position}
          <br />
          Email: {email}
          <br />
          Manager: {manager}
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
