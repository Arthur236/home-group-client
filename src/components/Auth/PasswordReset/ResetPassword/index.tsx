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

  const onSuccess = () => {
    history.push('/reset-successful');
  }

  const handleSubmit = (values: any) => {
    const newData = {
      ...values,
      token: params.token
    };

    dispatch(resetPassword(newData, onSuccess));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: handleSubmit
  });

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

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <Typography color='textPrimary' variant='h2'>
                  Reset Password
                </Typography>
              </Box>

              <TextField
                error={Boolean(formik.touched.newPassword && formik.errors.newPassword)}
                fullWidth
                helperText={formik.touched.newPassword && formik.errors.newPassword}
                label='New Password'
                margin='normal'
                name='newPassword'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                type='password'
                variant='outlined'
              />

              <TextField
                error={Boolean(formik.touched.newPassword && formik.errors.newPassword2)}
                fullWidth
                helperText={formik.errors.newPassword2}
                label='Confirm New Password'
                margin='normal'
                name='newPassword2'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.newPassword2}
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
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default ResetPassword;
