import { FETCH_EMPLOYEE } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_EMPLOYEE:
			return { ...state, employeeID: action.employeeData };
		default:
			return state;
	}
}