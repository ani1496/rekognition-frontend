import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';


import imgIcon from '../../img/img.png';

class ByName extends Component {
  render() {
    return (
       <div class="card has-text-centered has-border-radius">
          <h1>
          Find By Name
          </h1>
          <p class="level-item has-text-centered">
            <img class="has-border has-border-radius img-20" src={imgIcon}/>
          </p>
          <a class="button is-link is-rounded">
            <span class="icon has-padding-right">
                  <i class="fa fa-upload"></i>
            </span>
            Choose Image to Upload
          </a> 
          <br/>
          <a class="button is-link is-rounded has-margin-top10">
            <span class="icon has-padding-right">
                  <i class="fa fa-search "></i>
            </span>
              Search
          </a>  
      </div>
    );
  }
}

export default ByName;