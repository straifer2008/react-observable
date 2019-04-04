import {compose, withProps} from 'recompose';
import {withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {loginStart, registerStart} from '../../store/auth/actions';
import Auth from './auth';
import {modalClose} from '../../store/modals/actions';

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: 'auto',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 2,
		outline: 'none',
	}
});

const getModalStyle = () => {
	// const top = 50 + Math.round(Math.random() * 20) - 10;
	// const left = 50 + Math.round(Math.random() * 20) - 10;
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
};

const mapStateToProps = state => ({
	registerModal: state.modals.registerModal,
	loginModal: state.modals.loginModal
});

const mapDispatchToProps = ({
	registerStart,
	loginStart,
	modalClose
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styles),
	withProps({getModalStyle})
);

export default enhance(Auth)
