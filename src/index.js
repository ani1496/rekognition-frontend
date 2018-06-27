import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './main.css';

import reducerRekognition from './reducers/index.js';
import App from './components/app.js';

import * as actions from './actions/index.js';

//This is the store we create with redux's createStore method
const store = createStore(reducerRekognition, {})

store.dispatch(actions.getEmployee())
console.log(store.getState());


ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
