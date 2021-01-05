import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';

import Page from '../common/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        Dashboard
      </Container>
    </Page>
  );
}

export default Dashboard;
