import {connect} from 'react-redux';
import {compose, withState} from 'recompose';
import Nav from './nav';

const enhance = compose(
	connect(),
	withState('openCollapse', 'toggleCollapse', false)
);
export default enhance(Nav)
