import {ajax} from 'rxjs/ajax';
import {ofType} from 'redux-observable';
import {debounceTime, mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import types from './types';
import {
	authUserError,
	authUserFinish,
	confirmEmailError,
	confirmEmailFinish,
	registerError,
	registerFinish
} from './actions';
import {getUser} from '../user/actions';
import {getDefaultHeaders} from '../../utils/ajaxHelper';
import {error, success} from 'react-toastify-redux';
import {modalClose} from '../modals/actions';

const API_URL_USER = 'http://127.0.0.1:3333';

export const registerEpic = (action$) => action$.pipe(
	ofType(types.REGISTER_START),
	debounceTime(250),
	mergeMap(action => ajax.post(`${API_URL_USER}/register`, action.payload, getDefaultHeaders()).pipe(
		mergeMap(() => of(
			registerFinish(),
			modalClose(),
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
		map(({response}) => of(
			confirmEmailFinish(response)
		)), catchError(({error}) => of(confirmEmailError(error)))
	))
);

export const authLoginEpic = (action$) => action$.pipe(
	ofType(types.AUTH_USER_START),
	debounceTime(250),
	mergeMap(action => ajax.post(`${API_URL_USER}`, action.payload, getDefaultHeaders()).pipe(
		mergeMap(({response}) => of(
			getUser(response),
			authUserFinish()
		)), catchError(error => of(authUserError(error)))
	))
);
