import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image: string;
  time: string;
  category: string;
  summary: string;
}

const CardVote = ({ title, image, time, category, summary }: Props): JSX.Element => {
  return (
    <div className='cardVote'>
      <img src={image} alt={title} />
      <div className='info'>
        <h3>{title}</h3>
        <time>{time}</time>
        <span className='category'> in {category}</span>
        <p>{summary}</p>
        <div className='actions'>
          <Link to='/' className='rot-button'>
            Vote now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardVote;
