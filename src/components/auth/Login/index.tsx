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

import Page from '../../common/Page';

import { commonTransitionVariants } from '../../../utils/animationVariants';
import { LoginSchema } from '../../../utils/validationSchemas';
import { AppState } from '../../../redux/reducers';
import { login } from '../../../redux/actions/login/loginActions';

import '../style.scss';

const Login = () => {
  const { login: loginState } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (data: any) => {
    dispatch(login(data, history.push));
  };

  return (
    <Page title='Login'>
      <motion.div
        className='auth-wrapper'
        variants={commonTransitionVariants}
        initial='initial'
        animate='animate'
      >
        <Container maxWidth='sm'>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
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
                    Log in
                  </Typography>
                </Box>

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

                <Box my={2}>
                  <Button
                    color='primary'
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                    disabled={loginState.loading}
                  >
                    Log In
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </motion.div>
    </Page>
  );
};

export default Login;
