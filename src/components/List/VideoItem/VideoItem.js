import React from 'react';
import VideoButton from '../VideoButton/VideoButton';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './VideoItem.css';

const VideoItem = props => {
  const userEmail = useSelector(state => state.auth.userEmail);
  const dispatch = useDispatch();
  const { thumbnail, title, id, likes, dislikes } = props;

  return (
    <li className="videoitem-li">
      <label className="videoitem-img-label">{title}</label>
      <img
        src={thumbnail}
        alt="Thumbnail do video"
        title={title}
        className="videoitem-img"
      />

      <div className="videoitem-button-container">
        <VideoButton
          btnStyle={likes.includes(userEmail) ? 'liked' : 'like'}
          isDisabled={userEmail ? 'logged' : 'loggedout'}
          number={likes.length}
          btnClicked={() => dispatch(actions.rateVideo(id, userEmail, 'like'))}
        >
          Like
        </VideoButton>
        <VideoButton
          btnStyle={dislikes.includes(userEmail) ? 'disliked' : 'dislike'}
          isDisabled={userEmail ? 'logged' : 'loggedout'}
          number={dislikes.length}
          btnClicked={() =>
            dispatch(actions.rateVideo(id, userEmail, 'dislike'))
          }
        >
          Dislike
        </VideoButton>
      </div>
    </li>
  );
};

export default VideoItem;
