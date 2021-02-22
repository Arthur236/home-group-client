import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MainWrapper from '../../Wrappers/MainWrapper';
import Page from '../../Common/Page';
import StatusMessage from '../../Common/StatusMessage';

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

  const onSuccess = () => {
    history.push('/home');
  };

  const handleSubmit = (values: any) => {
    dispatch(login(values, onSuccess));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit
  });

  return (
    <MainWrapper>
      <Page title='Login'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            {loginState.error && <StatusMessage error={loginState.error} />}

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <Typography color='textPrimary' variant='h2'>
                  Log in
                </Typography>
              </Box>

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

              <Link to='/forgot-password' style={{ color: '#3f51b5' }}>
                Forgot Password?
              </Link>
            </form>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default Login;
