import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import imgIcon from '../../img/img.png';

function base64ToArrayBuffer(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = [];
      for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes;
}

const APIurl =
      'https://suodwh7n05.execute-api.us-east-1.amazonaws.com/prod/upload-image-to-s3?username=';

class ByImage extends Component {
      state = {
            image: null,
            imageName: null
      };

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

            axios
                  .post(
                        `${APIurl}${this.state.imageName}`,
                        {
                              data: this.state.imageBytes
                        },
                        config
                  )
                  .then(res => {
                        // console.log(res);
                  })
                  .catch(err => {
                        // console.log(err);
                  });
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
                                    onChange={this.fileSelectedHandler}
                              />
                              <span className="icon has-padding-right">
                                    <i className="fa fa-upload" />
                              </span>
                              Choose Image to Upload
                        </a>
                        <br />
                        <button
                              className="button is-link is-rounded has-margin-top10"
                              onClick={this.fileUploadHandler}
                        >
                              <span className="icon has-padding-right">
                                    <i className="fa fa-search " />
                              </span>
                              Search
                        </button>
                  </div>
            );
      }
}

export default ByImage;

//<Link className="button is-link is-rounded has-margin-top10" to="/imageSearchResult" onClick={this.fileUploadHandler}>
//<span className="icon has-padding-right">
//<i className="fa fa-search "></i>
//</span>
//Search
//</Link>
