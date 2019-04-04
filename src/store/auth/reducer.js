import types from './types';
import { handleActions } from 'redux-actions';

const initialState = {
	token: null,
	loading: false,
	error: null
};

const authReducer = handleActions(
	{
		[types.LOGIN_START]: state => ({
			...state,
			loading: true
		}),
		[types.LOGIN_FINISH]: (state, action) => ({
			...state,
			loading: false,
			error: null,
			token: action.payload,
		}),
		[types.LOGIN_ERROR]: (state, action) => ({
			...state,
			loading: false,
			error: action.payload
		}),
		[types.LOGOUT_START]: (state) =>({
			...state,
			loading: true,
		}),
		[types.LOGOUT_FINISH]: (state) =>({
			...state,
			token: null,
			loading: false,
			error: null
		}),
		[types.LOGOUT_ERROR]: (state, action) =>({
			error: action.payload
		}),
		[types.REGISTER_START]: (state) => ({
			...state,
			loading: true,
		}),
		[types.REGISTER_FINISH]: (state) => ({
			...state,
			loading: false,
			error: null
		}),
		[types.REGISTER_ERROR]: (state, action) => ({
			...state,
			loading: false,
			error: action.payload
		}),
		[types.CONFIRM_EMAIL_START]: (state) => ({
			...state,
			loading: true,
		}),
		[types.CONFIRM_EMAIL_FINISH]: (state, action) => ({
			...state,
			loading: false,
			token: action.payload
		}),
		[types.CONFIRM_EMAIL_ERROR]: (state, action) => ({
			...state,
			loading: false,
			error: action.payload
		})
	}, initialState
);

export default authReducer;
