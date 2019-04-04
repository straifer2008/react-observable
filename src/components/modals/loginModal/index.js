import { compose } from 'recompose';
import LoginModal from './loginModal';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
	loading: state.auth.loading
});

const enhance = compose(
	connect(mapStateToProps)
);

export default enhance(LoginModal);