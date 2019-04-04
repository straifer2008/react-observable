import handleActions from 'redux-actions/es/handleActions';
import types from './types';

const initialState = {
	isOpen: false,
	component: null
};

const modalReducer = handleActions(
	{
		[types.MODAL_OPEN]: (state, action) => ({
			...state,
			isOpen: true,
			component: action.payload
		}),
		[types.MODAL_CLOSE]: state => ({
			...state,
			isOpen: false,
			component: null
		})
	}, initialState
);

export default modalReducer;
