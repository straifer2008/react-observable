import React from 'react';
import './loader.scss';

const Loader = () => (
	<div className='Loader'>
		<div className="Loader_container">
			{/*<div className="dash uno"/>
			<div className="dash dos"/>
			<div className="dash tres"/>
			<div className="dash cuatro"/>*/}
			<div className="cssload-loader"/>
			<div className="cssload-inner cssload-one"/>
			<div className="cssload-inner cssload-two"/>
			<div className="cssload-inner cssload-three"/>
		</div>
	</div>
);

export default Loader;
