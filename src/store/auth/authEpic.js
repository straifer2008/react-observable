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
import {checkErrorType, getDefaultHeaders} from '../../utils/ajaxHelper';
import {error, success} from 'react-toastify-redux';
import {modalClose} from '../modals/actions';
import { push } from 'connected-react-router';
import { add, clear } from "react-redux-permissions"

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
		mergeMap( ({response}) => {
			localStorage.setItem('token', response.token.token);
			if (action.payload.remember) sessionStorage.setItem('token', response.token.token);
			return of(
				getUser(response.user),
				add(response.permissions),
				loginFinish(response.token.token),
				push('/home'),
				success('Login complete'),
			)
		}
	), catchError((err) => of(
			loginError(checkErrorType(err).error),
			error(checkErrorType(err).message)
	))))
);

export const logoutEpic = (action$) => action$.pipe(
	ofType(types.LOGOUT_START),
	debounceTime(250),
	mergeMap(() => ajax.get(`${API_URL_USER}/logout`, getDefaultHeaders()).pipe(
		mergeMap(() => {
			localStorage.removeItem('token');
			return of(
				logoutFinish(),
				clearUser(),
				clear(),
				push('/'),
				success('Logout complete!')
			)
		}), catchError((err) => of(
			logoutError(checkErrorType(err).error),
		))
	))
);
