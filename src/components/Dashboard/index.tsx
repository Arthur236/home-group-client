import React from 'react';
import {
  colors,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { AttachMoney, Money, PeopleOutlined } from '@material-ui/icons';

import DashboardWrapper from '../Wrappers/DashboardWrapper';
import Page from '../Common/Page';
import DashboardCard from '../DashboardCard';

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
    <DashboardWrapper>
      <Page
        className={classes.root}
        title='Dashboard'
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Total Contribution"
                value="KSH 500,000"
                icon={<AttachMoney />}
                avatarColor={colors.red[600]}
              />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Total Members"
                value="8"
                icon={<PeopleOutlined />}
                avatarColor={colors.green[600]}
              />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Total Fines"
                value="KSH 10,000"
                icon={<Money />}
                avatarColor={colors.indigo[600]}
              />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </DashboardWrapper>
  );
};

export default Dashboard;
