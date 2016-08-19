import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	// Submit email/password to the server
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { email, password }).then(response => {
			// If request is good.
			// - Update state to indicate user is authenticated
			dispatch({ type: AUTH_USER });

			// - Save the JWT token
			localStorage.setItem('token', response.data.token);
			// in browser console try as input: localStorage.setItem('token'), output: token info

			// - Redirect to the route '/feature'
			browserHistory.push('/feature')
		}).catch(() => {
			// If request is bad.
			// - Show an error to the user
		})
	};
}
