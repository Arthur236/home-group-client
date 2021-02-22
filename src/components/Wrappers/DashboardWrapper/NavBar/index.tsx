import React, { FC, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  User as UserIcon,
  Users as UsersIcon
} from 'react-feather';

import NavItem from './NavItem';

import { AppState } from '../../../../redux/reducers';
import { fetchProfile } from '../../../../redux/actions/profile/fetchProfileActions';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
    marginBottom: 10
  }
}));

type NavBarProps = {
  onMobileClose: Function;
  openMobile: boolean;
}

const NavBar: FC<NavBarProps> = (props) => {
  const { onMobileClose, openMobile } = props;

  const decoded: any = jwt.decode(localStorage.getItem('token') || '');

  const classes = useStyles();

  const dispatch = useDispatch();
  const location = useLocation();
  const { profile } = useSelector((state: AppState) => state);

  const currentUser = profile.profile?.user;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchProfile(decoded?.id));
    // eslint-disable-next-line
  }, []);

  const items = [
    {
      href: '/home',
      icon: BarChartIcon,
      title: 'Dashboard'
    },
    {
      href: '/members',
      icon: UsersIcon,
      title: 'Members'
    },
    {
      href: `/profile/${currentUser?._id}`,
      icon: UserIcon,
      title: 'Account'
    }
  ];

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={currentUser?.photo}
          to={`/profile/${currentUser?._id}`}
        />

        <Typography
          color="textPrimary"
          variant="h5"
        >
          {currentUser?.firstName}
        </Typography>

        <Typography
          color="textSecondary"
          variant="body2"
        >
          {currentUser?.isAdmin ? 'Admin' : 'Member'}
        </Typography>
      </Box>

      <Divider />

      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              // @ts-ignore
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={() => onMobileClose()}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;