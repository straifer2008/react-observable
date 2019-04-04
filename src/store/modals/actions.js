import { createActions } from 'redux-actions';
import types from './types';

export const {
	modalOpen,
	modalClose
} = createActions(
	types.MODAL_OPEN,
	types.MODAL_CLOSE
);
