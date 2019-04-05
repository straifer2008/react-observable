import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss'

const Page404 = () => (
	<div className="not-found parallax">
		<div className="sky-bg"/>
		<div className="wave-7"/>
		<div className="wave-6"/>
		<Link className="wave-island" to={'/'}>
			<img src='http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg' alt="Island" />
		</Link>
		<div className="wave-5"/>
		<div className="wave-lost wrp">
			<span>4</span>
			<span>0</span>
			<span>4</span>
		</div>
		<div className="wave-4"/>
		<div className="wave-boat">
			<img className="boat" src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat" />
		</div>
		<div className="wave-3"/>
		<div className="wave-2"/>
		<div className="wave-1"/>
		<div className="wave-message">
			<p>Сторінка не знайдена</p>
			<p>Натисніть на острів щоб перейти на головну</p>
		</div>
	</div>
);

export default Page404;