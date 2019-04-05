import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Nav} from '../';

const Header = ({
	                classes, toggleNav, nav,
	                modalOpen, token, logout, user
                }) => (
    <header>
	    <AppBar position="static">
		    <Toolbar>
			    {
				    token ?
					    <IconButton
						    className={classes.menuButton}
						    onClick={() => toggleNav(!nav)}
						    color="inherit"
						    aria-label="Menu"
					    >
						    <MenuIcon/>
					    </IconButton> : null
			    }
			    <Nav openNav={nav} toggleNav={() => toggleNav(!nav)}/>
			    <Typography variant="h6" color="inherit" className={classes.grow}>{!token ? 'ARTEM PROJECT' : user.email}</Typography>
			    {
				    !token ?
					   <>
						   <Button onClick={() => modalOpen('registerModal')} color="inherit">Register</Button>
						   <Button onClick={() => modalOpen('loginModal')} color="inherit">Login</Button>
					   </> : <Button onClick={() => logout()} color="inherit">Logout</Button>
			    }
		    </Toolbar>
	    </AppBar>
    </header>
);

export default Header;
