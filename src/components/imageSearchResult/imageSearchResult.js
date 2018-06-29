import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';


const ImageSearchResult = (props) => {
  
  const renderEmployees = (employees) => {
    return employees.map(employee => (
      <EmployeeCard key={employee.id} employee={employee} />
    ));
  }

  return (
    <div className="card-background has-text-centered has-border-radius">
      <h1>Find By Image</h1>
      <p>{props.employeesIDs && <p>true</p> }</p>
      <p className="level-item has-margin20px">
        <img 
          className="has-border"
          src={
            props.image
              ? props.image
              : imgIcon
          }
          alt="selectedImage" 
        />
      </p>

       {renderEmployees(props.employees)}

      <br />

      <Link
        className="button is-link is-rounded has-margin-top10"
        to="/byImage"
      >
        <span className="icon has-padding-right">
          <i className="fa fa-search " />
        </span>
        New Search
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
      return {
            employees : state.employees,
            employeesIDs: state.employeesIDs,
            image: state.image
      };
}

export default connect(mapStateToProps)(ImageSearchResult);
