import React, { FC } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardContent,
  colors,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

type DashboardCardProps = {
  className?: string;
  title: string;
  value: string;
  icon: React.ReactNode;
  avatarColor?: string;
}

const DashboardCard: FC<DashboardCardProps> = (props) => {
  const { className, title, value, icon, avatarColor } = props;

  const useStyles = makeStyles(() => ({
    root: {
      height: '100px'
    },
    avatar: {
      backgroundColor: avatarColor,
      height: 56,
      width: 56
    }
  }));

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {title}
            </Typography>

            <Typography
              color="textPrimary"
              variant="h3"
            >
              {value}
            </Typography>
          </Grid>

          <Grid item>
            <Avatar className={classes.avatar}>
              {icon}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DashboardCard.defaultProps = {
  avatarColor: colors.indigo[600]
}

export default DashboardCard;
