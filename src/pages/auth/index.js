import {compose, withProps, withState} from 'recompose';
import {withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {registerStart} from '../../store/auth/actions';
import {clearUser} from '../../store/user/actions';
import Auth from './auth';
import {modalClose, modalOpen} from '../../store/modals/actions';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		position: 'absolute',
		width: 'auto',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 2,
		outline: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
});

const getModalStyle = () => {
	const top = 50 + Math.round(Math.random() * 20) - 10;
	const left = 50 + Math.round(Math.random() * 20) - 10;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
};

const mapStateToProps = state => ({
	loading: state.auth.loading,
	error: state.auth.error,
	mOpen: state.modals.isOpen,
	mComponent: state.modals.mComponent
});

const mapDispatchToProps = ({
	registerStart,
	clearUser,
	modalOpen,
	modalClose
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withState('isMenuOpen', 'handleProfileMenuOpen', false),
	withState('openNav', 'toggleNav', false),
	withStyles(styles),
	withProps({getModalStyle})
);

export default enhance(Auth)
