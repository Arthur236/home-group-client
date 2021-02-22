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
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MainWrapper from '../../../Wrappers/MainWrapper';
import Page from '../../../Common/Page';
import StatusMessage from '../../../Common/StatusMessage';

import { commonTransitionVariants } from '../../../../utils/animationVariants';
import { ForgotPasswordSchema } from '../../../../utils/validationSchemas';
import { AppState } from '../../../../redux/reducers';
import { forgotPassword } from '../../../../redux/actions/forgotPassword/forgotPasswordActions';

import '../../style.scss';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { forgotPassword: forgotPasswordState } = useSelector((state: AppState) => state);

  const initialValues = {
    email: ''
  };

  const onSuccess = () => {
    history.push('/email-sent');
  }

  const handleSubmit = (values: any) => {
    dispatch(forgotPassword(values, onSuccess));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: handleSubmit
  });

  return (
    <MainWrapper>
      <Page title='Forgot Password'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            {forgotPasswordState.error && <StatusMessage error={forgotPasswordState.error} />}

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <Typography color='textPrimary' variant='h2'>
                  Forgot Password
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

              <Box my={2}>
                <Button
                  color='primary'
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  disabled={forgotPasswordState.loading}
                >
                  Send Reset Link
                </Button>
              </Box>
            </form>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default ForgotPassword;
