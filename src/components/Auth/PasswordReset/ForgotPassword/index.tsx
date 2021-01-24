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
    email: '',
  };

  const handleSubmit = (data: any) => {
    dispatch(forgotPassword(data, history.push));
  };

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

            <Formik
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema}
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
                    <Typography color='textPrimary' variant='h2'>
                      Forgot Password
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
              )}
            </Formik>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default ForgotPassword;
