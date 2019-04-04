import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {
	Drawer, List,
	ListItem, ListSubheader,
	ListItemIcon, ListItemText,
	Collapse
} from '@material-ui/core';

const Nav = ({openNav, toggleNav, openCollapse, toggleCollapse}) => (
	<nav>
		<Drawer
			open={openNav}
			onClose={() => toggleNav(!openNav)}
			anchor='left'
		>
			<div
				onClick={() => toggleNav(!openNav)}
				onKeyDown={() => toggleNav(!openNav)}
			>
				<List
					component="nav"
					subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
				>
					<ListItem button>
						<ListItemIcon>
							<SendIcon/>
						</ListItemIcon>
						<ListItemText inset primary="Sent mail"/>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon/>
						</ListItemIcon>
						<ListItemText inset primary="Drafts"/>
					</ListItem>
					<ListItem button onClick={() => toggleCollapse(!openCollapse)}>
						<ListItemIcon>
							<InboxIcon/>
						</ListItemIcon>
						<ListItemText inset primary="Inbox"/>
						{openCollapse ? <ExpandLess/> : <ExpandMore/>}
					</ListItem>
					<Collapse in={openCollapse} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button>
								<ListItemIcon>
									<StarBorder/>
								</ListItemIcon>
								<ListItemText inset primary="Starred"/>
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		</Drawer>
	</nav>
);

export default Nav;
