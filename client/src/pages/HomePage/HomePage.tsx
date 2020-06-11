import React from 'react';

import heroHomeImage from './../../assets/images/hero-home.jpg';
import kanyePic from './../../assets/images/kanye-west.jpg';
import markPic from './../../assets/images/mark.jpg';
import cristinaPic from './../../assets/images/cristina-fernandez.jpg';
import malayaPic from './../../assets/images/malaya-yousafzai.jpg';
import CardVote from '../../components/Shared/CardVote';

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
            <CardVote
              title='Kanye West'
              image={kanyePic}
              time='1 month ago'
              category='Entertaiment'
              summary='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />
            <CardVote
              title='Mark Zuckerberg'
              image={markPic}
              time='1 month ago'
              category='Business'
              summary='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />
            <CardVote
              title='Cristina Fernández de Kirchner'
              image={cristinaPic}
              time='1 month ago'
              category='Politics'
              summary='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />
            <CardVote
              title='Malala Yousafzai'
              image={malayaPic}
              time='1 month ago'
              category='Entertaiment'
              summary='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
