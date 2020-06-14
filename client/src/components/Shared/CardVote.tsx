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
  isAuthenticated: boolean;
  userTotalVotes?: number;
  handleSubmit: (id: number, option: string) => void;
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
  isAuthenticated,
  handleSubmit,
  userTotalVotes,
}: Props): JSX.Element => {
  const [optionSelected, setOptionSelected] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setOptionSelected(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    const response: any = await handleSubmit(id, optionSelected);
    if (response) {
      setIsSaving(false);
      setIsSaved(true);
    }
  };

  const handleVoteAgainButton = () => {
    setIsSaving(false);
    setIsSaved(false);
    setOptionSelected('');
  }

  const MathUpPercent = Math.round(upPercent);
  const MathDownPercent = Math.round(downPercent);
  const cardIconUpDown =
    MathUpPercent >= 50 ? 'smallThumb__up' : 'smallThumb__down';

  return (
    <div className='cardVote'>
      <img src={image} alt={title} />
      <div className='info'>
        <h3>{title}</h3>
        <time>{time}</time>
        <span className='category'> in {category}</span>
        {isSaved ? <p>Thank you for voting!</p> : <p>{summary}</p>}
        <div className='cardVote__actions'>
          {isAuthenticated && (
            <>
              {userTotalVotes! < 3 && (
                <>
              {isSaved ? (
                <button
                  className='rot-button'
                  onClick={handleVoteAgainButton}
                >
                  Vote again
                </button>
              ) : (
                <form onSubmit={onSubmit}>
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
                  <button
                    className='rot-button'
                    type='submit'
                    disabled={isSaving || !optionSelected ? true : false}
                  >
                    {isSaving ? 'Loading...' : 'Vote now'}
                  </button>
                </form>
              )}
              </>
              )}
            </>
          )}
        </div>
      </div>
      <div className='cardVote__bar'>
        {MathUpPercent > 0 && (
          <div className='thumbsUpBar' style={{ width: `${MathUpPercent}%` }}>
            <i className='fas fa-thumbs-up'></i>
            <span className='percentage'>{MathUpPercent}%</span>
          </div>
        )}
        {MathDownPercent > 0 && (
          <div
            className='thumbsDownBar'
            style={{ width: `${MathDownPercent}%` }}
          >
            <span className='percentage'>{MathDownPercent}%</span>
            <i className='fas fa-thumbs-up'></i>
          </div>
        )}
      </div>
      {(MathUpPercent > 0 || MathDownPercent > 0) && (
        <div className={`smallThumb ${cardIconUpDown}`}>
          <i className='fas fa-thumbs-up'></i>
        </div>
      )}
    </div>
  );
};

export default CardVote;
