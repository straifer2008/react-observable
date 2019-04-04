import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'
import { combineEpics } from 'redux-observable';
import { reducer as permissions } from "react-redux-permissions"
import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import modalReducer from './modals/reducer';
import {authLoginEpic, confirmEmailEpic, logoutEpic, registerEpic} from './auth/authEpic';
import {toastsReducer as toasts} from 'react-toastify-redux';

export const rootEpic = combineEpics(
	authLoginEpic,
	registerEpic,
	confirmEmailEpic,
	logoutEpic
);

export const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	permissions,
	toasts,
	auth: authReducer,
	user: userReducer,
	modals: modalReducer
});

