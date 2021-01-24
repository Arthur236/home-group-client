import React from 'react';
import Page from '../../../Common/Page';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core';

import { commonTransitionVariants } from '../../../../utils/animationVariants';
import MainWrapper from '../../../Wrappers/MainWrapper';

import tickIcon from '../../../../assets/images/tick.svg';

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

const ResetSuccessful = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MainWrapper>
      <Page title='Reset Successful'>
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
                className={classes.image}
                src={tickIcon}
              />

              <Typography color='primary' variant='h2' className={classes.marginBottom}>
                Reset Successful
              </Typography>

              <Typography color='textPrimary' variant='h3' className={classes.marginBottom}>
                Your password has been reset successfully
              </Typography>

              <Button
                color='primary'
                fullWidth
                size='large'
                type='button'
                variant='contained'
                onClick={() => history.push('/login')}
              >
                Proceed To Login
              </Button>
            </Box>
          </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default ResetSuccessful;
