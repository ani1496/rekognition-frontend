import React from 'react';

// import { NavLink } from 'react-router-dom';

import PersonIcon from '../../img/person.png';


const EmployeeCard = props => {
  
  const { firstname = 'Employee Name', lastname, employeetitle, managerFistName, managerLastName, pic} = props.employee;

  return (
    <div className="card employee-card">
      <div className="card-image">
        <figure className="image">
          <img className="has-border" src={pic ? pic : PersonIcon} alt="employee" />
        </figure>
      </div>
      <div className="card-content has-text-left">
        <div className="media">
          <div className="media-content">
            <p className="is-size-6 has-text-weight-bold">{`${firstname} ${lastname}`}</p>
          </div>
        </div>

        <div className="content">
          Position: {employeetitle}
          <br />
          Manager: {`${managerFistName} ${managerLastName}`}
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;


//{pic ? pic : <img className="has-border" src={PersonIcon} alt="employee" /> }