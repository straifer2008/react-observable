import {compose} from 'recompose';
import RegisterModal from './registerModal';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
	loading: state.auth.loading
});

const enhance = compose(
	connect(mapStateToProps)
);

export default enhance(RegisterModal)
