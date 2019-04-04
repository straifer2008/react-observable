import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Nav} from '../';

const Header = ({
	                classes, toggleNav, nav,
	                modalOpen, token, logout
                }) => (
    <header>
	    <AppBar position="static">
		    <Toolbar>
			    <IconButton
				    className={classes.menuButton}
				    onClick={() => toggleNav(!nav)}
				    color="inherit"
				    aria-label="Menu"
			    >
				    <MenuIcon/>
				    <Nav openNav={nav} toggleNav={() => toggleNav(!nav)}/>
			    </IconButton>
			    <Typography variant="h6" color="inherit" className={classes.grow}>TEST PROJECT</Typography>
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
