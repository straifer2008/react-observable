import React from 'react';
import AppRotes from './routes';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify-redux';
import {Header} from '../';

const App = ({classes}) => (
	<div className={classes.root}>
		<Header/>
		<ToastContainer/>
		<AppRotes/>
	</div>
);

export default App;
