import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { Modal} from '@material-ui/core';
import {connect} from 'react-redux';

const getModalStyle = () => {
	const top = 50 + Math.round(Math.random() * 20) - 10;
	const left = 50 + Math.round(Math.random() * 20) - 10;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
};
const styles = theme => ({
	paper: {
		position: 'absolute',
		width: 'auto',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 2,
		outline: 'none',
	},
});

const ModalSimple = ({classes, handleClose, open, children, error}) => (
	<Modal
		open={open}
		onClose={() => handleClose(!!error)}
	>
		<div style={getModalStyle()} className={classes.paper}>
			{children}
		</div>
	</Modal>
);

const mapStateToProps = state => ({
	error: state.auth.error
});

const enhance = compose(
	connect(mapStateToProps),
	withStyles(styles),
);

export default enhance(ModalSimple);
