import React from 'react';
import Permissions from "react-redux-permissions"
import './styles.scss';
import {roles} from '../../constants/roles';

const Home = () => (
	<div className='Home'>
		<h1>Home</h1>
		<Permissions allowed={roles.admin}>
			<h2>Role is - Admin</h2>
		</Permissions>
		<Permissions allowed={roles.user}>
			<h2>Role is - User</h2>
		</Permissions>
	</div>
);

Home.propTypes = {};

Home.propTypes = {};
export default Home;