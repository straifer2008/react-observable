import {compose, withState} from 'recompose';
import Settings from './settings';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	formControl: {
		margin: theme.spacing.unit,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

const enhance = compose(
	withStyles(styles),
	withState('pictures', 'onDrop', [])
);

export default enhance(Settings);