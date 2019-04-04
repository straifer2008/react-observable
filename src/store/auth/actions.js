import { createActions } from 'redux-actions';
import types from './types';

export const {
	loginStart,
	loginFinish,
	loginError,
	logoutStart,
	logoutFinish,
	logoutError,
	registerStart,
	registerFinish,
	registerError,
	confirmEmailStart,
	confirmEmailFinish,
	confirmEmailError
} = createActions(
	types.LOGIN_START,
	types.LOGIN_FINISH,
	types.LOGIN_ERROR,
	types.LOGOUT_START,
	types.LOGOUT_FINISH,
	types.LOGOUT_ERROR,
	types.REGISTER_START,
	types.REGISTER_FINISH,
	types.REGISTER_ERROR,
	types.CONFIRM_EMAIL_START,
	types.CONFIRM_EMAIL_FINISH,
	types.CONFIRM_EMAIL_ERROR,
);
