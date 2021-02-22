import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import MainWrapper from '../Wrappers/MainWrapper';
import Page from '../Common/Page';

import notFoundImage from '../../assets/images/undraw_page_not_found.svg';
import { commonTransitionVariants } from '../../utils/animationVariants';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MainWrapper>
      <Page
        className={classes.root}
        title='404'
      >
        <motion.div
          className={classes.wrapper}
          variants={commonTransitionVariants}
          initial='initial'
          animate='animate'
        >
            <Container maxWidth='md'>
              <Typography
                align='center'
                color='textPrimary'
                variant='h1'
              >
                The page you are looking for isn’t here
              </Typography>

              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                <img
                  alt='Under development'
                  className={classes.image}
                  src={notFoundImage}
                />

                <Button
                  color='primary'
                  size='large'
                  variant='contained'
                  onClick={() => history.push('/')}
                >
                  Go Back Home
                </Button>
              </Box>
            </Container>
        </motion.div>
      </Page>
    </MainWrapper>
  );
};

export default NotFound;