import {connect} from 'react-redux';
import {compose} from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Nav from './nav';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
};

const enhance = compose(
	connect(),
	withStyles(styles),
);
export default enhance(Nav)
