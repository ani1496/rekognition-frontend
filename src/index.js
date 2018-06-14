import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './main.css';

import App from './components/app.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
