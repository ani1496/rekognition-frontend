import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';
import { getEmployeeDB } from '../../actions/index.js';

import * as actions from '../../actions/index.js';

const ImageSearchResult = (props) => {
  

  const renderEmployees = (employees) => { 
    if (employees)
      return employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ));
  };

  return (
    <div className="card-background has-text-centered has-border-radius">
      <h1>Find By Image</h1>
      <p>{props.employeesIDs}</p>
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

       {renderEmployees(props.employeeInfo)}

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
            employeeInfo: state.employeeInfo,
            employeeDB: state.employeeDB,
            image: state.image
      };
}

export default connect(mapStateToProps, actions)(ImageSearchResult);
