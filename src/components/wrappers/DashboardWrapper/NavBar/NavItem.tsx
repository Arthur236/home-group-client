import React, { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

type NavItemProps = {
  className?: string;
  href: string;
  icon: React.ReactComponentElement<any>;
  title: string;
};

const NavItem: FC<NavItemProps> = (props) => {
  const {
    className,
    href,
    icon: Icon,
    title,
  } = props;
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && (
          // @ts-ignore
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

export default NavItem;
