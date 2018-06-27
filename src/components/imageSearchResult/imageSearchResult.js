import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { createStore, combineReducers } from 'redux';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';


const ImageSearchResult = (props) => {
  
  const renderEmployees = (employees) => {
    return employees.map(employee => (
      <EmployeeCard key={employee._id} employee={employee} />
    ));
  }

  return (
    <div className="card-background has-text-centered has-border-radius">
      <h1>Find By Image</h1>
      <p className="level-item has-margin20px">
        <img className="has-border" src={imgIcon} alt="selectedImage" />
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
            employees : state.employees
      };
}

export default connect(mapStateToProps)(ImageSearchResult);
