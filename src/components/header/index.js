import {compose, withState} from 'recompose';
import Header from './header';
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {modalOpen} from '../../store/modals/actions';
import {logoutStart} from '../../store/auth/actions';

const styles = theme => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

const mapStateToProps = state => ({
	token: state.auth.token
});

const mapDispatchToProps = ({
	modalOpen,
	logout: logoutStart
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styles),
	withState('nav', 'toggleNav', false)
);

export default enhance(Header);