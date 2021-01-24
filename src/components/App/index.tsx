import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
} from '@material-ui/core';

import Page from '../Common/Page';

import { commonTransitionVariants } from '../../utils/animationVariants';

const App = () => {
  return (
    <Page title='Home Group'>
      <motion.div
        variants={commonTransitionVariants}
        initial='initial'
        animate='animate'
      >
        <Container maxWidth='sm'>
          <h2>Home Group</h2>
        </Container>
      </motion.div>
    </Page>
  );
};

export default App;
