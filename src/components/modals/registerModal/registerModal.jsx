import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {Input, Button, Grid, Typography} from '@material-ui/core';
import {Loader} from '../../';

const RegisterValidation = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(5)
		.max(20)
		.required('Password is required'),
	// passwordConfirmation: Yup.string()
	// 	.oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const RegisterModal = ({onSubmit, loading}) => (
	loading ?
		<Loader/> :
		<div className='LoginModal'>
			<Grid container justify='center' spacing={24}>
				<Grid item>
					<Typography align='center' color='textPrimary' variant='h3'>Register</Typography>
				</Grid>
			</Grid>
			<Formik
				initialValues={{email: '', password: ''}}
				validationSchema={RegisterValidation}
				onSubmit={values => onSubmit(values)}
			>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleBlur,
					  handleSubmit
				  }) => (
					<form onSubmit={handleSubmit}>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={6}>
								<Input
									type='text'
									name="email"
									placeholder='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									required
								/>
								<Typography color='error'>{errors.email && touched.email && errors.email}</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Input
									type="password"
									name="password"
									placeholder='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									required
								/>
								<Typography color='error'>{errors.password && touched.password && errors.password}</Typography>
							</Grid>
							<Grid item xs>
								<Grid container justify='flex-end'>
									<Button
										variant="outlined"
										color='primary'
										type="submit"
										disabled={!!errors.password || !!errors.email}
									>Submit</Button>
								</Grid>
							</Grid>
						</Grid>
					</form>
				)}
			</Formik>
		</div>
);

RegisterModal.propTypes = {
	onSubmit: PropTypes.func,
	loading: PropTypes.bool
};

export default RegisterModal;
