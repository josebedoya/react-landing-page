import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
  summary: string;
  upPercent: number;
  downPercent: number;
}

const CardVote = ({
  id,
  title,
  image,
  time,
  category,
  summary,
  upPercent,
  downPercent,
}: Props): JSX.Element => {
  const [optionSelected, setOptionSelected] = useState<string>();

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setOptionSelected(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(optionSelected, id);
  };

  return (
    <div className='cardVote'>
      <img src={image} alt={title} />
      <div className='info'>
        <h3>{title}</h3>
        <time>{time}</time>
        <span className='category'> in {category}</span>
        <p>{summary}</p>
        <div className='cardVote__actions'>
          <form onSubmit={handleSubmit}>
            <input
              type='radio'
              name={`vote[${id}]`}
              value='up'
              onChange={handleRadioChange}
            />
            <input
              type='radio'
              name={`vote[${id}]`}
              value='down'
              onChange={handleRadioChange}
            />
            <input type='hidden' name='id' value={id} />
            <button className='rot-button' type='submit'>
              Vote now
            </button>
          </form>
        </div>
      </div>
      <div className='cardVote__bar'>
        <div className='thumbsUpBar' style={{ width: `${upPercent}%` }}>
          <i className='fas fa-thumbs-up'></i>
          <span className='percentage'>{upPercent}%</span>
        </div>
        <div className='thumbsDownBar' style={{ width: `${downPercent}%` }}>
          <span className='percentage'>{downPercent}%</span>
          <i className='fas fa-thumbs-up'></i>
        </div>
      </div>
      <div className='smallThumb smallThumb__up'>
        <i className='fas fa-thumbs-up'></i>
      </div>
    </div>
  );
};

export default CardVote;
