import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../../../pages/auth';
import confirmEmail from '../../confirmEmail';

const AppRotes = () => (
	<Switch>
		<Route exact path="/" component={Auth} />
		<Route exact path="/confirm-email/:token" component={confirmEmail} />
	</Switch>
);

export default AppRotes;
