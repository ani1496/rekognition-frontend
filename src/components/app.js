import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './nav/nav.js';
import ByImage from './byImage/byImage.js';
import ByName from './byName/byName.js';
import ImageSearchResult from './imageSearchResult/imageSearchResult.js';


class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
          	<Route
          		path="/byImage"
          		component= {ByImage}
          	/>
          	<Route
          		path="/byName"
          		component= {ByName}
          	/>
          	<Route
          		path="/imageSearchResult"
          		component= {ImageSearchResult}
          	/>
         	<Redirect from="/" to="/byImage" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return {
    uploodImage: null,
  }
}

export default connect(mapStateToProps)(App);

//export default App;