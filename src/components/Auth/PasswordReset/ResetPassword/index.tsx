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
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MainWrapper from '../../../Wrappers/MainWrapper';
import Page from '../../../Common/Page';
import StatusMessage from '../../../Common/StatusMessage';

import { commonTransitionVariants } from '../../../../utils/animationVariants';
import { ResetPasswordSchema } from '../../../../utils/validationSchemas';
import { AppState } from '../../../../redux/reducers';
import { resetPassword } from '../../../../redux/actions/resetPassword/resetPasswordActions';

import '../../style.scss';

const ResetPassword = () => {
  const { resetPassword: resetPasswordState } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const params: any = useParams();

  const initialValues = {
    newPassword: '',
    newPassword2: ''
  };

  const handleSubmit = (data: any) => {
    const newData = {
      ...data,
      token: params.token
    }
    dispatch(resetPassword(newData, history.push));
  };

  return (
    <MainWrapper>
      <Page title='Reset Password'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            {resetPasswordState.error && <StatusMessage error={resetPasswordState.error} />}

            <Formik
              initialValues={initialValues}
              validationSchema={ResetPasswordSchema}
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
                      Reset Password
                    </Typography>
                  </Box>

                  <TextField
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    fullWidth
                    helperText={touched.newPassword && errors.newPassword}
                    label='New Password'
                    margin='normal'
                    name='newPassword'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.newPassword}
                    type='password'
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.newPassword && errors.newPassword2)}
                    fullWidth
                    helperText={errors.newPassword2}
                    label='Confirm New Password'
                    margin='normal'
                    name='newPassword2'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.newPassword2}
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
                      disabled={resetPasswordState.loading}
                    >
                      Reset Password
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

export default ResetPassword;
