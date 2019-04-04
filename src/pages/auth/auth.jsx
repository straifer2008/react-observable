import React from 'react';
import {Modal} from '@material-ui/core';
import PropTypes from 'prop-types';
import {RegisterModal} from '../../components';
import {LoginModal} from '../../components';

const Auth = ({
	              classes, registerStart,
	              getModalStyle, modalClose,
	              registerModal, loginModal,
	              loginStart
              }) => (
	<>
		<Modal open={registerModal ? registerModal : false} onClose={() => modalClose('registerModal')}>
			<div style={getModalStyle()} className={classes.paper}>
				<RegisterModal onSubmit={(values) => registerStart(values)}/>
			</div>
		</Modal>
		
		<Modal open={loginModal ? loginModal : false} onClose={() => modalClose('loginModal')}>
			<div style={getModalStyle()} className={classes.paper}>
				<LoginModal onSubmit={(values) => loginStart(values)}/>
			</div>
		</Modal>
	</>
);

Auth.propTypes = {
	classes: PropTypes.object.isRequired,
	registerStart: PropTypes.func,
	getModalStyle: PropTypes.func,
	modalClose: PropTypes.func,
	registerModal: PropTypes.bool
};
export default Auth;
