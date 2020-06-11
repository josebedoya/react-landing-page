import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <Link to='/' className='logo'>
          Rule of Thumb.
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/past-trials'>Past Trials</Link>
            </li>
            <li>
              <Link to='/how-it-works'>How It Works</Link>
            </li>
            <li>
              <Link to='/login'>Log In / Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
