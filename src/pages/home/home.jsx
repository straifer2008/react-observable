import React from 'react';
import PropTypes from 'prop-types';

const Home = ({name}) => (
    <h1>Home {name}</h1>
);

Home.propTypes = {
	name: PropTypes.string
};

Home.propTypes = {};
export default Home;