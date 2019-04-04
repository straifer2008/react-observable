import {ajax} from 'rxjs/ajax';
import {ofType} from 'redux-observable';
import {debounceTime, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import types from './types';
import {
	loginError,
	loginFinish,
	confirmEmailError,
	confirmEmailFinish,
	registerError,
	registerFinish, logoutFinish, logoutError
} from './actions';
import {clearUser, getUser} from '../user/actions';
import {getDefaultHeaders} from '../../utils/ajaxHelper';
import {error, success} from 'react-toastify-redux';
import {modalClose} from '../modals/actions';
import { push } from 'connected-react-router';

const API_URL_USER = 'http://127.0.0.1:3333';

export const registerEpic = (action$) => action$.pipe(
	ofType(types.REGISTER_START),
	debounceTime(500),
	mergeMap(action => ajax.post(`${API_URL_USER}/register`, action.payload, getDefaultHeaders()).pipe(
		mergeMap(() => of(
			registerFinish(),
			modalClose('registerModal'),
			success('Confirm your email')
		)),
		catchError(({response}) => of(
			registerError(response[0]),
			error(response[0].message)
		))
	))
);

export const confirmEmailEpic = (action$) => action$.pipe(
	ofType(types.CONFIRM_EMAIL_START),
	debounceTime(250),
	mergeMap(action => ajax.post(`${API_URL_USER}/confirmEmail`, action.payload, getDefaultHeaders()).pipe(
		mergeMap(({response}) => of(
			confirmEmailFinish(response),
			push('/'),
			success('Email is confirmed')
		)), catchError(({error}) => of(
			confirmEmailError(error),
			push('/'),
			error('Email was not confirmed, try again later...')
		))
	))
);

export const authLoginEpic = (action$) => action$.pipe(
	ofType(types.LOGIN_START),
	debounceTime(250),
	mergeMap(action => ajax.post(`${API_URL_USER}/login`, action.payload, getDefaultHeaders()).pipe(
		mergeMap(({response}) => of(
			getUser(response.user),
			loginFinish(response.token.token),
			push('/home'),
			success('Login complete'),
			// localStorage.setItem('token', response.token.token)
		)), catchError(
			({response}) => of(
				loginError(Array.isArray(response) ? response[0] : response),
				error(Array.isArray(response) ? response[0].message : response.message)
			)
		)
	))
);

export const logoutEpic = (action$) => action$.pipe(
	ofType(types.LOGOUT_START),
	debounceTime(250),
	mergeMap(() => ajax.get(`${API_URL_USER}/logout`, getDefaultHeaders()).pipe(
		mergeMap(() => of(
			logoutFinish(),
			clearUser(),
			push('/'),
			// localStorage.removeItem('token'),
			success('Logout complete!')
		)), catchError((error) => of(
			logoutError(error),
		))
	))
);
