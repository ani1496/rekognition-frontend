import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './main.css';

import reducerRekognition from './reducers/index.js';
import App from './components/app.js';

import * as actions from './actions/index.js';

//This is the store we create with redux's createStore method
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerRekognition, {}, composeEnhancers(applyMiddleware(thunk)));


store.dispatch(actions.getEmployee())
console.log(store.getState());
store.dispatch(actions.getEmployeeDB(1007))
console.log(store.getState());


ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
