import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from '../../';
import {Button, Grid, Input, Typography} from '@material-ui/core';
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(5)
		.max(20)
		.required('Password is required'),
});

const LoginModal = ({onSubmit, loading}) => (
	loading ? <Loader/> :
		<div>
			<Grid container justify='center' spacing={24}>
				<Grid item>
					<Typography align='center' color='textPrimary' variant='h3'>Login</Typography>
				</Grid>
			</Grid>
			<Formik
				initialValues={{email: '', password: ''}}
				validationSchema={LoginValidation}
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

LoginModal.propTypes = {
	onSubmit: PropTypes.func
};
export default LoginModal;