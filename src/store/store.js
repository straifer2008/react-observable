import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './index';
import storage from 'redux-persist/lib/storage';
import {createBlacklistFilter} from 'redux-persist-transform-filter';

export const history = createBrowserHistory({hashType: "slash"});

const epicMiddleware = createEpicMiddleware();

const saveSubsetBlacklistFilter = createBlacklistFilter(
	'auth',
	['loading']
);

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'user', 'permissions'],
	blacklist: ['loading'],
	transforms: [
		saveSubsetBlacklistFilter
	]
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const middleWares = applyMiddleware(
	epicMiddleware,
	routerMiddleware(history),
	createLogger()
);

export default () => {
	let store = createStore(
		persistedReducer, {},
		composeWithDevTools(middleWares)
	);

	epicMiddleware.run(rootEpic);

	let persist = persistStore(store);
	return { store, persist }
}
