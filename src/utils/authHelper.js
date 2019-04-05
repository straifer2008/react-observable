import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import Loader from '../components/loader/loader';

export const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: '/',
	wrapperDisplayName: 'UserIsAuthenticated',
	authenticatedSelector: state => state.auth.token !== null,
	authenticatingSelector: state => state.auth.loading,
	AuthenticatingComponent: Loader
});

export const userIsNotAuthenticated = connectedRouterRedirect({
	redirectPath: '/home',
	wrapperDisplayName: 'userIsNotAuthenticated',
	authenticatedSelector: state => state.auth.token === null,
	authenticatingSelector: state => state.auth.loading,
	AuthenticatingComponent: Loader
});
