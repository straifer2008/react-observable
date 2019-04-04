import React from 'react';
import Loader from '../loader/loader';
import './style.scss'

const confirmEmail = () => (
	<div className='confirmEmail'>
		Please wait, we confirm your email
		<Loader/>
	</div>
);

export default confirmEmail;
