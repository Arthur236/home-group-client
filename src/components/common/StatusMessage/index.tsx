import React, { FC } from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type StatusMessageProps = {
  error?: string;
  success?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: 10
    }
  })
);

const StatusMessage: FC<StatusMessageProps> = (props) => {
  const { error, success } = props;

  const classes = useStyles();

  if (!error && !success) {
    return null;
  }

  const renderAlert = () => {
    if (success) {
      return (
        <Alert elevation={6} variant='filled' severity='success'>
          {success}
        </Alert>
      );
    } else if (error) {
      return (
        <Alert elevation={6} variant='filled' severity='error'>
          {error}
        </Alert>
      );
    }
  };

  return (
    <div className={classes.root}>
      {renderAlert()}
    </div>
  );
};

export default StatusMessage;
