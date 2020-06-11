import React from 'react';

import heroHomeImage from './../../assets/images/hero-home.jpg';
import kanyePic from './../../assets/images/kanye-west.jpg';
import markPic from './../../assets/images/mark.jpg';
import cristinaPic from './../../assets/images/cristina-fernandez.jpg';
import malayaPic from './../../assets/images/malaya-yousafzai.jpg';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <section
        className='section-content hero-home'
        style={{ backgroundImage: `url(${heroHomeImage})` }}
      ></section>
      <section className='section-content votes'>
        <div className='content-inner'>
          <h2>Votes</h2>
          <div className='cards-items'>
            <div className='cardVote'>
              <img src={kanyePic} alt='kanye' />
              <div className='info'>
                <h3>Kanye West</h3>
                <time>1 month ago</time>{' '}
                <span className='category'>in Entertaiment</span>
                <p>
                  Vestibulum diam ante, porttitor a odio eget, rhoncus neque.
                  Aenean eu velit libero.
                </p>
                <div className='actions'>
                  <Link to='/' className='rot-button'>
                    Vote now
                  </Link>
                </div>
              </div>
            </div>
            <div className='cardVote'>
              <img src={markPic} alt='kanye' />
              <div className='info'>
                <h3>Mark Zuckerberg</h3>
                <time>1 month ago</time>{' '}
                <span className='category'>in Business</span>
                <p>
                  Vestibulum diam ante, porttitor a odio eget, rhoncus neque.
                  Aenean eu velit libero.
                </p>
                <div className='actions'>
                  <Link to='/' className='rot-button'>
                    Vote now
                  </Link>
                </div>
              </div>
            </div>
            <div className='cardVote'>
              <img src={cristinaPic} alt='kanye' />
              <div className='info'>
                <h3>Cristina Fernández de Kirchner</h3>
                <time>1 month ago</time>{' '}
                <span className='category'>in Politics</span>
                <p>
                  Vestibulum diam ante, porttitor a odio eget, rhoncus neque.
                  Aenean eu velit libero.
                </p>
                <div className='actions'>
                  <Link to='/' className='rot-button'>
                    Vote now
                  </Link>
                </div>
              </div>
            </div>
            <div className='cardVote'>
              <img src={malayaPic} alt='kanye' />
              <div className='info'>
                <h3>Malala Yousafzai</h3>
                <time>1 month ago</time>{' '}
                <span className='category'>in Entertaiment</span>
                <p>
                  Vestibulum diam ante, porttitor a odio eget, rhoncus neque.
                  Aenean eu velit libero.
                </p>
                <div className='actions'>
                  <Link to='/' className='rot-button'>
                    Vote now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
