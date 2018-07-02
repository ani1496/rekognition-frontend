import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import imgIcon from '../../img/img.png';
import * as myAPIs from './api.js';

import { saveImage, rekognitionPost } from '../../actions/index.js';
import * as actions from '../../actions/index.js';

const APIurl = myAPIs.rekAPI;

function base64ToArrayBuffer(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = [];
      for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes;
}

class ByImage extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  image: null,
                  imageName: null
            };
      }

      fileSelectedHandler = event => {
            if (event.target.files && event.target.files[0]) {
                  let name = event.target.files[0].name;
                  let reader = new FileReader();

                  reader.onload = () => {
                        const splitIndex = reader.result.indexOf(',') + 1;
                        
                        this.setState({
                              image: reader.result,
                              imageBytes: base64ToArrayBuffer(
                                    reader.result.substr(splitIndex)
                              ),
                              imageName: name
                        });
                        this.props.saveImage(this.state.image);
                  };
                  reader.readAsDataURL(event.target.files[0]);
            }
      };

      fileUploadHandler = () => {
            const fd = new FormData();
            fd.append('data', this.state.image);

            let config = {
                  headers: {
                        'Content-Type': 'image/jpeg',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods':
                              'GET,HEAD,OPTIONS,POST,PUT'
                  }
            };

            this.props.rekognitionPost(this.state.imageName, this.state.imageBytes, config);

      };


      render() {

            return (
                  <div className="card-background has-text-centered has-border-radius">
                        <h1>Find By Image</h1>
                        <p className="level-item has-text-centered has-margin20px">
                              <img
                                    className="has-border"
                                    alt="selected"
                                    src={
                                          this.state.image
                                                ? this.state.image
                                                : imgIcon
                                    }
                              />
                        </p>
                        <a className="button is-link is-rounded">
                              <input
                                    className="file-input"
                                    type="file"
                                    accept=".jpg, .png, .jpeg"
                                    onChange={this.fileSelectedHandler.bind(this)}
                              />
                              <span className="icon has-padding-right">
                                    <i className="fa fa-upload" />
                              </span>
                              Choose Image to Upload
                        </a>
                        <br />
                       <Link className="button is-link is-rounded has-margin-top10" to="/imageSearchResult" onClick={this.fileUploadHandler}>
                              <span className="icon has-padding-right">
                                    <i className="fa fa-search "></i>
                              </span>
                              Search
                        </Link>
                  </div>
            );
      }
}


const mapStateToProps = (state) => {
      return {
            employeeID: state.employeeID,
            employees: state.employees
      };
};


export default connect(mapStateToProps, actions)(ByImage);

// export default ByImage;
