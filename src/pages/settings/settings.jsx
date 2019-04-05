import React from 'react';
import './styles.scss';
import {
	Typography, TextField, Grid,
	FormControl, FormHelperText, Button,
} from '@material-ui/core';
import {DatePicker} from 'material-ui-pickers';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import ImageUploader from 'react-images-upload';
import FlipMove from 'react-flip-move';

const ValidationScheme = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	name: Yup.string('Name must by string')
		.min(3)
		.max(20),
	birthday: Yup.string(),
	aboutMe: Yup.string('')
		.min(20)
		.max(399)
});

const FormikDatePicker = ({name, form: {setFieldValue}, field: {value}, ...rest}) => (
	<DatePicker
		name={name}
		keyboard
		clearable
		autoOk
		disableOpenOnEnter
		margin='normal'
		label="Date of Birthday"
		format="dd/MM/yyyy"
		placeholder="12/02/1991"
		mask={value => value ? [/[0-3]/, /\d/, '/', /0|1/, /\d/, '/', /1|2/, /\d/, /\d/, /\d/] : []}
		value={value}
		animateYearScrolling={false}
		onChange={value => setFieldValue('birthday', value)}
	/>
);

const FormikImageUploader = ({name, form: {setFieldValue}, field: {value}, ...rest}) => (
	<>
	<ImageUploader
		name={name}
		withIcon={true}
		buttonText='Choose images'
		onChange={(val) => setFieldValue('avatar', val)}
		imgExtension={['.jpg', '.gif', '.png', '.gif']}
		maxFileSize={5242880}
	/>
		{value ?
			<FlipMove enterAnimation="fade" leaveAnimation="fade">
				<img src={value[0]} className="uploadPicture" alt="preview"/>
			</FlipMove>
			: null}
	</>
);

const Settings = ({classes, pictures, onDrop}) => (
	<div className="Settings">
		<Typography align='center' color='textPrimary' variant='h2'>Settings</Typography>
		<Formik
			initialValues={{
				email: '',
				name: '',
				avatar: '',
				birthday: '2019-10-24T22:00:00.000Z',
				aboutMe: ''
			}}
			validationSchema={ValidationScheme}
			onSubmit={(values, {setSubmitting}) => {
				console.log(values, '-----values');
				setSubmitting(false);
			}}
		>
			{({values, errors, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
				<form onSubmit={handleSubmit}>
					<Grid container spacing={24}>
						<Grid item xs={4}>
							<FormControl className={classes.formControl} error>
							<TextField
								label="Name"
								name='name'
								className={classes.textField}
								margin="normal"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							<FormHelperText>{errors.name}</FormHelperText>
						</FormControl>
						</Grid>
						<Grid item xs={4}>
							<FormControl className={classes.formControl} error>
							<TextField
								label="Email"
								name='email'
								margin="normal"
								className={classes.textField}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								required
							/>
							
							<FormHelperText>{errors.email}</FormHelperText>
						</FormControl>
						</Grid>
						<Grid item xs={4}>
							<FormControl className={classes.formControl} error>
							<Field
								component={FormikDatePicker}
								onChange={handleChange}
								name="birthday"/>
							<FormHelperText>{errors.birthday}</FormHelperText>
						</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl className={classes.formControl} error>
								<Field component={FormikImageUploader} name='avatar'/>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl className={classes.formControl} error>
							<TextField
								label="About Me"
								name='aboutMe'
								multiline
								rows="5"
								margin="normal"
								variant="outlined"
								className={classes.textField}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.aboutMe}
							/>
							<FormHelperText>{errors.aboutMe}</FormHelperText>
						</FormControl>
						</Grid>
					</Grid>
					<Button
						disabled={isSubmitting}
						variant="outlined"
						color="primary"
						type="submit"
						className={classes.button}>Save</Button>
				</form>
			)}
		</Formik>
	</div>
);

Settings.propTypes = {};
export default Settings;