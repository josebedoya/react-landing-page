import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Terms and Conditions</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policys</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          Folow Us
          <Link to='/'>
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to='/'>
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
