import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/app';
import './index.scss';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import configStore, {history} from './store/store';

const {persist, store} = configStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persist}>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</PersistGate>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();