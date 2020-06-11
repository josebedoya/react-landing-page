import React from 'react';
import { Link } from 'react-router-dom';

const BottomBanner: React.FC = () => {
  return (
    <div className='bottomBanner'>
      <div className='txt'>Is there anyone else you would want us to add?</div>
      <Link
        to='/'
        className='rot-button rot-button--color-2 rot-button--size-large'
      >
        Submit a Name
      </Link>
    </div>
  );
};

export default BottomBanner;
