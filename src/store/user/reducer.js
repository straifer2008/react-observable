import types from './types';
import { handleActions } from 'redux-actions';

const initialState = {};

const userReducer = handleActions(
	{
		[types.GET_USER]: (state, action) => ({
			...action.payload,
		}),
		[types.CLEAR_USER]: (state, action) => ({}),
	}, initialState
);

export default userReducer;
