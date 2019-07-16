import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import AddVideoForm from './AddVideoForm/AddVideoForm';
import VideoList from './VideoList/VideoList';
import './List.css';

const PlusSquare = () => <i className="far fa-plus-square plus-square-icon" />;

const List = props => {
  const [hidden, setHidden] = useState(true);
  const disposeModal = () => setHidden(true);
  const videosArray = useSelector(state => state.video.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchVideos());
  }, [dispatch]);

  return (
    <div className="list-container">
      <h1 className="list-h1-title">Vídeos</h1>
      <button className="list-add-button" onClick={() => setHidden(false)}>
        <PlusSquare />
        Adicionar video
      </button>
      {!hidden ? <AddVideoForm disposeModal={disposeModal} /> : null}
      {videosArray ? <VideoList videosArray={videosArray} /> : null}
    </div>
  );
};

export default List;
