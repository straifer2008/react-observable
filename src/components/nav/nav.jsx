import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, List, ListItemIcon, ListItemText, SwipeableDrawer} from '@material-ui/core';
import {Settings, Home, Chat, GridOn} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import './styles.scss';

const Nav = ({openNav, toggleNav, classes}) => (
	<nav className='Nav'>
		<SwipeableDrawer open={openNav} onClose={toggleNav} onOpen={toggleNav}>
			<div tabIndex={0} role="button" onKeyDown={toggleNav} onClick={toggleNav}>
				<div className={classes.list}>
					<List className='Nav_list'>
						{[
							{text: 'Home', icon: <Home/>, path: '/home'},
							{text: 'Chat', icon: <Chat/>, path: '/chat'},
							{text: 'Grid', icon: <GridOn/>, path: 'grid'},
							{text: 'Settings', icon: <Settings/>, path: '/settings'}
						].map(item => (
							<Link to={item.path} key={item.text}>
								<ListItem button>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.text}/>
								</ListItem>
							</Link>
						))}
					</List>
				</div>
			</div>
		</SwipeableDrawer>
	</nav>
);

Nav.propTypes = {
	classes: PropTypes.object.isRequired,
	openNav: PropTypes.bool,
	toggleNav: PropTypes.func
};

export default Nav;
