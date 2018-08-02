import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';
import * as actions from '../../actions/index.js';


const ImageSearchResult = props => {
 
  const renderEmployees = (employees) => { 
    if (employees)
      return employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ));
  };

  const toClearEmployees = () => {
    props.clearEmployees();
  };

  return (
    <div className="card-background has-text-centered has-border-radius">
      <h1>Find By Image</h1>
      <p>{props.employeesIDs}</p>
      <p className="level-item has-margin20px">
        <img 
          className="has-border img-size"
          src={
            props.image
              ? props.image
              : imgIcon
          }
          alt="selectedImage" 
        />
      </p>

        {  props.employees === undefined ? <p>Finding Employee...</p> : (props.employees === 'false' ? <p>Employee not found</p> : renderEmployees(props.employees)) }

      <br />

      <Link
        className="button is-link is-rounded has-margin-top10"
        to="/byImage"
        onClick={toClearEmployees}
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
            employees: state.employees,
            image: state.image
      };
}

export default connect(mapStateToProps, actions)(ImageSearchResult);
