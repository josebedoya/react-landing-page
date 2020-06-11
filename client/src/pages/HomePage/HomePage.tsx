import React from 'react';

import heroHomeImage from './../../assets/images/hero-home.jpg';

const HomePage: React.FC = () => {
  return (
    <section className="section-content hero-home" style={{ backgroundImage: `url(${heroHomeImage})`}}>

    </section>
  );
};

export default HomePage;
