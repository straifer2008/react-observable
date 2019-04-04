import {compose} from 'recompose';
import App from './App';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
	root: {
		flexGrow: 1,
	}
});

const enhance = compose(
	connect(),
	withStyles(styles)
);

export default enhance(App);
