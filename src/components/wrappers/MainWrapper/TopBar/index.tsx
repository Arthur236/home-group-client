import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

import Logo from '../../../common/Logo';

const useStyles = makeStyles(() => ({
  banner: {
    display: 'flex',
    alignItems: 'center'
  },
  bannerText: {
    color: '#fff',
    marginLeft: 10
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      className='top-bar'
      elevation={0}
    >
      <Toolbar className='toolbar'>
        <RouterLink to='/'>
          <div className={classes.banner}>
            <Logo />

            <span className={classes.bannerText}>Home Group</span>
          </div>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
