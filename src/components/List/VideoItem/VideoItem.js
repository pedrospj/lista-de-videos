import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './VideoItem.css';

const LikeIcon = () => (
  <i className="fas fa-thumbs-up" style={{ margin: 'auto 4px auto 0' }} />
);

const DislikeIcon = () => (
  <i className="fas fa-thumbs-down" style={{ marginRight: '4px' }} />
);

const VideoItem = props => {
  const userEmail = useSelector(state => state.auth.userEmail);
  const dispatch = useDispatch();
  return (
    <li className="videoitem-li">
      <a
        href={`https://www.youtube.com/watch?v=${props.id}`}
        style={{ margin: '0' }}
      >
        <div>
          <img src={props.thumbnail} alt="" className="videoitem-img" />
        </div>
      </a>
      <div className="videoitem-title-div">
        <p className="videoitem-video-title">{props.title}</p>

        {userEmail ? (
          <div className="videoitem-button-container">
            <button
              className="like-button"
              onClick={() => dispatch(actions.likeVideo(props.id, userEmail))}
            >
              <div>{props.likes.length}</div>
              <div className="videoitem-inner-button">
                <LikeIcon />
                <p className="videoitem-inner-text">Like</p>
              </div>
            </button>
            <button className="dislike-button">
              <div>0</div>
              <div className="videoitem-inner-button">
                <DislikeIcon />
                <p className="videoitem-inner-text">Dislike</p>
              </div>
            </button>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default VideoItem;
