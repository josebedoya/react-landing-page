import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { Link } from 'react-router-dom';
import closeXIcon from './../../assets/images/x-white.svg';
import searchIcon from './../../assets/images/search.svg';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { logoutUser } from '../../pages/LoginPage/loginSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isShowingLogin, setIsShowingLogin] = useState<boolean>(false);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) setIsShowingLogin(false);
  }, [isAuthenticated]);

  const loginLogout = () => {
    if (isAuthenticated) {
      dispatch(logoutUser());
    } else {
      setIsShowingLogin(true)
    }
  }

  const renderLogin = () => (
    <div>
      <button
        onClick={() => setIsShowingLogin(false)}
        className='closeModalBtn'
      >
        <img src={closeXIcon} alt='close' />
      </button>
      <LoginPage />
    </div>
  );

  return (
    <>
      {isShowingLogin && renderLogin()}
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
                <Link to='/' onClick={loginLogout}>
                  {isAuthenticated ? 'Logout' : 'Log In / Sign Up'}
                </Link>
              </li>
            </ul>
          </nav>
          <img src={searchIcon} alt='Search' />
        </div>
      </header>
    </>
  );
};

export default Header;
