import {compose} from 'recompose';
import App from './App';
import {connect} from 'react-redux';

const mapStateToProps = state => ({});

const enhance = compose(
	connect(mapStateToProps)
);

export default enhance(App);
