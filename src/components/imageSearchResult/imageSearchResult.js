import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { createStore, combineReducers } from 'redux';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';


const employeeOne = {
  id: 1,
  name: 'Juan',
  position: 'Intern',
  email: 'juan@flp.com',
  manager: 'Pablo'
}

const employeeTwo = {
  id: 2,
  name: 'Lucas',
  position: 'Intern 1',
  email: 'lucas@flp.com',
  manager: 'JD'
}

const employeeThree = {
  id: 3,
  name: 'Pedro',
  position: 'Intern 2',
  email: 'pedro@flp.com',
  manager: 'Julio'
}


const employeesArray = [employeeOne, employeeTwo, employeeThree];

// //GET_EMPLOYEE
// const getEmployee = ( ) => {
//   state: 'GET_EMPLOYEE'
//   employee: [ employeeOne, employeeTwo ]   //axios.get(`${routes.apiRoot}/users`, employee),
// };

// const employeeStatus = [];

// const employeeReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EMPLOYEE':
//       return [
//         ...state,
//         action.expense
//       ];
//     default:
//       return state;
//   }
// };




class ImageSearchResult extends Component {
  renderEmployees(employees) {
    return employees.map(employee => (
      <EmployeeCard key={employee._id} employee={employee} />
    ));
  }


  render() {
    console.log(this.props.test);

    return (
      <div className="card-background has-text-centered has-border-radius">
        <h1>Find By Image</h1>
        <p className="level-item has-margin20px">
          <img className="has-border" src={imgIcon} alt="selectedImage" />
        </p>

        
        {this.renderEmployees(employeesArray)}

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
}

export default ImageSearchResult;
