import React from 'react';
import './VideoButton.css';

const buttonStyle = {
  like: 'videoitem-button videoitem-button-like',
  liked: 'videoitem-button videoitem-button-liked',
  dislike: 'videoitem-button videoitem-button-dislike',
  disliked: 'videoitem-button videoitem-button-disliked'
};

const disabledStyle = {
  logged: ' ',
  loggedout: ' video-button-loggedout'
};

const VideoButton = props => {
  const { children, btnStyle, number, btnClicked, isDisabled } = props;
  return (
    <button
      className={buttonStyle[btnStyle] + ' ' + disabledStyle[isDisabled]}
      onClick={btnClicked}
      disabled={isDisabled === 'loggedout'}
    >
      <p className="videoitem-inner-number">{number}</p>
      <p className="videoitem-inner-p">{children}</p>
    </button>
  );
};

export default VideoButton;
