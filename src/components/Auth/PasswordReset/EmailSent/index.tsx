import React from 'react';
import Page from '../../../Common/Page';
import { motion } from 'framer-motion';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

import { commonTransitionVariants } from '../../../../utils/animationVariants';
import MainWrapper from '../../../Wrappers/MainWrapper';

import mailIcon from '../../../../assets/images/mail.svg';

import '../../style.scss';

const useStyles = makeStyles(() => ({
  image: {
    marginBottom: 30,
    height: 100,
    width: 100
  },
  marginBottom: {
    marginBottom: 20
  }
}));

const EmailSent = () => {
  const classes = useStyles();

  return (
    <MainWrapper>
      <Page title='Email Sent'>
        <motion.div
          className='auth-wrapper'
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
          <Container maxWidth='sm'>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
            >
              <img
                alt='Under development'
                className={`${classes.image} shadow`}
                src={mailIcon}
              />

              <Typography color='primary' variant='h2' className={classes.marginBottom}>
                Email Sent
              </Typography>

              <Typography color='textPrimary' variant='h3'>
                Check your inbox for your password reset link
              </Typography>
            </Box>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default EmailSent;
