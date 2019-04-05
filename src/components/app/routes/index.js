import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Auth, Home, Settings} from '../../../pages';
import {confirmEmail, Page404} from '../../';
import {userIsAuthenticated, userIsNotAuthenticated} from '../../../utils/authHelper';

const AppRotes = () => (
	<Switch>
		<Route exact path="/" component={userIsNotAuthenticated(Auth)}/>
		<Route path="/confirm-email/:token" component={userIsNotAuthenticated(confirmEmail)}/>
		<Route path="/home" component={userIsAuthenticated(Home)}/>
		<Route path="/settings" component={userIsAuthenticated(Settings)}/>
		<Route component={Page404} />
	</Switch>
);

export default AppRotes;
