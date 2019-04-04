import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Auth, Home} from '../../../pages';
import {confirmEmail} from '../../';

const AppRotes = () => (
	<Switch>
		<Route exact path="/" component={Auth}/>
		<Route path="/confirm-email/:token" component={confirmEmail}/>
		<Route path="/home" component={Home}/>
	</Switch>
);

export default AppRotes;
