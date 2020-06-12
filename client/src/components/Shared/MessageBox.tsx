import React from 'react';

import closeXIcon from './../../assets/images/x.svg';

interface Props {
  onClick: () => void;
}

const MessageBox = ({ onClick }: Props) => {
  return (
    <div className='message-box'>
      <aside>
        Speak out. Be heard.<strong>Be counted</strong>
      </aside>
      <div className='info'>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </div>
      <button onClick={onClick}>
        <img src={closeXIcon} alt='close' />
      </button>
    </div>
  );
};

export default MessageBox;
