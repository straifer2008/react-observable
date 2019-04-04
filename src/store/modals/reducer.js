import handleActions from 'redux-actions/es/handleActions';
import types from './types';

const initialState = {

};

const modalReducer = handleActions(
	{
		[types.MODAL_OPEN]: (state, action) => ({
			[action.payload]: true
		}),
		[types.MODAL_CLOSE]: (state, action) => ({
			[action.payload]: false
		})
	}, initialState
);

export default modalReducer;
