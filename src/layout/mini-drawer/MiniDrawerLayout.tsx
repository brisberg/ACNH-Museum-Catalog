import React from 'react';
import NavDrawer from './NavDrawer';
import TopBar from './TopBar';

export interface MiniDrawerLayoutProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  toolbar: JSX.Element;
  navbar: JSX.Element;
}

/**
 * A full App Layout component including a sticky toolbar and a expandable side drawer
 * which displayes minicons when closed.
 *
 * Based on demo from: https://material-ui.com/components/drawers/#mini-variant-drawer
 * */
export default function MiniDrawerLayout(props: MiniDrawerLayoutProps): JSX.Element {
  const { isOpen, handleClose, handleOpen, toolbar, navbar } = props;

  return (
    <div>
      <TopBar isOpen={isOpen} handleOpen={handleOpen} contents={toolbar} />
      <NavDrawer isOpen={isOpen} handleClose={handleClose} contents={navbar} />
    </div>
  );
}
