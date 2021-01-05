import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import Logo from '../../../common/Logo';

type TopBarProps = {
  onMobileNavOpen: Function;
}

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

const Index: FC<TopBarProps> = (props) => {
  const { onMobileNavOpen } = props;

  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar
      className='top-bar'
      elevation={0}
    >
      <Toolbar>
        <RouterLink to="/home">
          <div className={classes.banner}>
            <Logo />

            <span className={classes.bannerText}>Home Group</span>
          </div>
        </RouterLink>

        <Box flexGrow={1} />

        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>

        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={() => onMobileNavOpen()}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
