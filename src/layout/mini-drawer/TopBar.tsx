import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { DRAWER_WIDTH } from './constants';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  }),
);

export interface TopBarProps {
  isOpen: boolean;
  handleOpen: () => void;
  contents: JSX.Element
}

export default function TopBar({ isOpen, handleOpen, contents }: TopBarProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        {contents}
      </Toolbar>
    </AppBar>
  );
}
