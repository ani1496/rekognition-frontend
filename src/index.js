// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import './main.css';

// import App from './components/app.js';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
//import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './main.scss';

import App from './components/app.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(
	createStore,
);

ReactDOM.render(
	<Provider
		store={createStoreWithMiddleware(
			reducers,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		)}
	>
		<App />
	</Provider>,
	document.querySelector('.root'),
);

