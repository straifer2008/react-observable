import { createActions } from 'redux-actions';
import types from './types';

export const {
	authUserStart,
	authUserFinish,
	authUserError,
	registerStart,
	registerFinish,
	registerError,
	confirmEmailStart,
	confirmEmailFinish,
	confirmEmailError
} = createActions(
	types.AUTH_USER_START,
	types.AUTH_USER_FINISH,
	types.AUTH_USER_ERROR,
	types.REGISTER_START,
	types.REGISTER_FINISH,
	types.REGISTER_ERROR,
	types.CONFIRM_EMAIL_START,
	types.CONFIRM_EMAIL_FINISH,
	types.CONFIRM_EMAIL_ERROR,
);
