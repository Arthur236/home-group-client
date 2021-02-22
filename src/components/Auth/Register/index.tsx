import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';

import MainWrapper from '../../Wrappers/MainWrapper';
import Page from '../../Common/Page';
import StatusMessage from '../../Common/StatusMessage';

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

  const onSuccess = () => {
    history.push('/login');
  };

  const handleSubmit = (values: any) => {
    dispatch(register(values, onSuccess));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit
  });

  return (
    <MainWrapper>
      <Page title='Register'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            {registrationState.error && <StatusMessage error={registrationState.error} />}

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <Typography
                  color='textPrimary'
                  variant='h2'
                >
                  Register
                </Typography>
              </Box>

              <TextField
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label='First Name'
                margin='normal'
                name='firstName'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type='text'
                variant='outlined'
              />

              <TextField
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                fullWidth
                helperText={formik.touched.lastName && formik.errors.lastName}
                label='Last Name'
                margin='normal'
                name='lastName'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type='text'
                variant='outlined'
              />

              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label='Email Address'
                margin='normal'
                name='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type='email'
                variant='outlined'
              />

              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label='Password'
                margin='normal'
                name='password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type='password'
                variant='outlined'
              />

              <TextField
                error={Boolean(formik.touched.password && formik.errors.password2)}
                fullWidth
                helperText={formik.errors.password2}
                label='Confirm Password'
                margin='normal'
                name='password2'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password2}
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

              <Typography>
                Already have an account? <Link to='/login' style={{ color: '#3f51b5' }}>Login</Link>
              </Typography>
            </form>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default Register;
