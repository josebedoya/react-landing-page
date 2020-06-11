import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard: React.FC = () => {
  return (
    <div className='heroCard'>
      <div className='heroCard heroCard__body'>
        <div className='info'>
          <div className='subtitle'>What’s your opinion on</div>
          <div className='title'>Pope Francis?</div>
          <div className='summary'>
            He’s talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </div>
          <Link to='/' className='more-info'>
            <i className='fab fa-wikipedia-w'></i>
            <span>More information</span>
          </Link>
          <div className='next'>What’s Your Verdict?</div>
        </div>
      </div>
      <div className='heroCard heroCard__footer'>
        <div className='thumbsUpBar'>
          <i className='fas fa-thumbs-up'></i>
        </div>
        <div className='thumbsDownBar'>
          <i className='fas fa-thumbs-up'></i>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
