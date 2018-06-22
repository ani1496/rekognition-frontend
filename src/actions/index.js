import axios from 'axios';

import * as types from './types';

import routes from '../../config/routes';


export function fetchEmployee(id) {
	

	// axios.defaults.headers['x-auth'] = token;

	// return dispatch => {
	// 	dispatch({ type: types.AUTH_LOGIN });

	// 	axios
	// 		.all([
	// 			axios.get(`${routes.apiRoot}/users`),
	// 			axios.get(`${routes.apiRoot}/patients`),
	// 			axios.get(`${routes.apiRoot}/procedures`),
	// 			axios.get(`${routes.apiRoot}/messages`),
	// 			axios.get(`${routes.apiRoot}/me`),
	// 		])
	// 		.then(
	// 			axios.spread((users, patients, procedures, messages, me) => {
	// 				dispatch({ type: types.FETCH_USERS, payload: users });
	// 				dispatch({ type: types.FETCH_PATIENTS, payload: patients });
	// 				dispatch({
	// 					type: types.FETCH_PROCEDURES,
	// 					payload: procedures,
	// 				});
	// 				dispatch({ type: types.FETCH_MESSAGES, payload: messages });
	// 				dispatch({ type: types.FETCH_ME, payload: me });
	// 			}),
	// 		);
	// };
}


