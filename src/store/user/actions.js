import { createActions } from 'redux-actions';
import types from './types';

export const {
	getUser,
	clearUser
} = createActions(
	types.GET_USER,
	types.CLEAR_USER,
);
