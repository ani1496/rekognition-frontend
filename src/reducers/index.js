import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import employeeReducer from './reducer-byImage'
// import authReducer from './reducer-auth';
// import usersReducer from './reducer-users';
// import patientsReducer from './reducer-patients';
// import proceduresReducer from './reducer-procedures';
// import messagesReducer from './reducer-messages';

const rootReducer = combineReducers({
	employee : employeeReducer,
	// form: formReducer,
	// auth: authReducer,
	// users: usersReducer,
	// patients: patientsReducer,
	// procedures: proceduresReducer,
	// messages: messagesReducer,
});

export default rootReducer;