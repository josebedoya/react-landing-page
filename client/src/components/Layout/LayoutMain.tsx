import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className='main-content'>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutMain;
