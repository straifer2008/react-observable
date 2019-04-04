import React from 'react';
import {
	Button,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Modal,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import LoginModal from '../../components/modals/loginModal';
import Nav from '../../components/nav';

const Auth = ({
	classes, isMenuOpen,
	handleProfileMenuOpen,
	openNav, toggleNav,
	clearUser, registerStart,
	error, getModalStyle,
	modalOpen, modalClose, mOpen, mComponent
}) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<IconButton
					className={classes.menuButton}
					onClick={() => toggleNav(!openNav)}
					color="inherit"
					aria-label="Menu"
				>
					<MenuIcon/>
					<Nav openNav={openNav} toggleNav={() => toggleNav(!openNav)}/>
				</IconButton>
				<Typography variant="h6" color="inherit" className={classes.grow}>TEST PROJECT</Typography>
				<Button
					onClick={() => clearUser('User is clear')}
					color="inherit"
				>Clear user</Button>
				<Button
					onClick={() => modalOpen('LoginModal')}
					color="inherit"
				>
					Register
				</Button>

				<Modal open={mOpen} onClose={() => modalClose()}>
					<div style={getModalStyle()} className={classes.paper}>
						<LoginModal onSubmit={(values) => registerStart(values)}/>
					</div>
				</Modal>
			</Toolbar>
		</AppBar>
	</div>
);

Auth.propTypes = {
	openNav: PropTypes.bool,
	isMenuOpen: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	error: PropTypes.object,
	clearUser: PropTypes.func,
	toggleNav: PropTypes.func,
	registerStart: PropTypes.func,
	getModalStyle: PropTypes.func,
	handleProfileMenuOpen: PropTypes.func
};
export default Auth;
