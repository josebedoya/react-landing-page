import React from 'react';
import LayoutMain from './LayoutMain';

interface Props {
  type?: string;
  children: React.ReactNode;
}

const Layout = ({ type = 'main', children }: Props) => {
  return <LayoutMain>{children}</LayoutMain>;
};

export default Layout;
