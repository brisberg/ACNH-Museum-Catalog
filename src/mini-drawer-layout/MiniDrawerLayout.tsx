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

export default function MiniDrawerLayout(props: MiniDrawerLayoutProps): JSX.Element {
  const { isOpen, handleClose, handleOpen, toolbar, navbar } = props;

  return (
    <div>
      <TopBar isOpen={isOpen} handleOpen={handleOpen} contents={toolbar} />
      <NavDrawer isOpen={isOpen} handleClose={handleClose} contents={navbar} />
    </div>
  );
}
