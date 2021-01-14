import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DashboardWrapper from '../../wrappers/DashboardWrapper';
import Page from '../../common/Page';
import StatusMessage from '../../common/StatusMessage';

import { commonTransitionVariants } from '../../../utils/animationVariants';
import { RegisterSchema } from '../../../utils/validationSchemas';
import { AppState } from '../../../redux/reducers';
import { register } from '../../../redux/actions/registration/registrationActions';

import '../style.scss';

const Register = () => {
  const { registration: registrationState } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  };

  const handleSubmit = (data: any) => {
    dispatch(register(data, history.push));
  };

  return (
    <DashboardWrapper>
      <Page title='Register'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            {registrationState.error && <StatusMessage error={registrationState.error} />}

            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={handleSubmit}
            >
              {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values
                }) => (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                    <Typography
                      color='textPrimary'
                      variant='h2'
                    >
                      Register
                    </Typography>
                  </Box>

                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    label='First Name'
                    margin='normal'
                    name='firstName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    type='text'
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    label='Last Name'
                    margin='normal'
                    name='lastName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    type='text'
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label='Email Address'
                    margin='normal'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type='email'
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label='Password'
                    margin='normal'
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    type='password'
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.password && errors.password2)}
                    fullWidth
                    helperText={errors.password2}
                    label='Confirm Password'
                    margin='normal'
                    name='password2'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password2}
                    type='password'
                    variant='outlined'
                  />

                  <Box my={2}>
                    <Button
                      color='primary'
                      fullWidth
                      size='large'
                      type='submit'
                      variant='contained'
                      disabled={registrationState.loading}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Container>
        </motion.div>
      </Page>
    </DashboardWrapper>
  );
};

export default Register;
