import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { fetchCharacters } from './characterSlice';

import heroHomeImage from './../../assets/images/hero-home.jpg';
import CardVote from '../../components/Shared/CardVote';
// import characters from './../../data/characters.json';
import HeroCard from '../../components/Shared/HeroCard';
import BottomBanner from '../../components/Shared/BottomBanner';
import MessageBox from '../../components/Shared/MessageBox';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [showMessageBox, setShowMessageBox] = useState<boolean>(true);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { data: characters } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const handleVoteSubmit = (option: string, id: number) => {
    console.log(option, id);
  };

  const renderCharacters = () =>
    characters.map((item: any) => (
      <CardVote
        key={item.id}
        id={item.id}
        title={item.title}
        image={`images/${item.image}`}
        time={item.time}
        category={item.category}
        summary={item.summary}
        upPercent={64}
        downPercent={36}
        isAuthenticated={isAuthenticated}
        handleSubmit={handleVoteSubmit}
      />
    ));

  return (
    <>
      <section
        className='section-content hero-home'
        style={{ backgroundImage: `url(${heroHomeImage})` }}
      >
        <div className='content-inner'>
          <HeroCard />
        </div>
        <div className='hero-home__footer'>
          <div className='left'>Closing in</div>
          <div className='right'>
            <b>22</b> days
          </div>
        </div>
      </section>
      <section className='section-content votes'>
        <div className='content-inner'>
          {showMessageBox && (
            <MessageBox onClick={() => setShowMessageBox(false)} />
          )}
          <h2>Votes</h2>
          <div className='cards-items'>{renderCharacters()}</div>
        </div>
      </section>
      <section className='section-content'>
        <div className='content-inner'>
          <BottomBanner />
        </div>
      </section>
    </>
  );
};

export default HomePage;
