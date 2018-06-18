import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmployeeCard from '../employeeCard/employeeCard.js';
import imgIcon from '../../img/img.png';

class ImageSearchResult extends Component {
  render() {
    return (
      <div className="card-background has-text-centered has-border-radius">
        <h1>Find By Image</h1>
        <p className="level-item has-margin20px">
          <img className="has-border" src={imgIcon} alt="selectedImage" />
        </p>

        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
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
