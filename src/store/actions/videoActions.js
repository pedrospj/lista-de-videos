import * as actionTypes from '../actionTypes';
import { myYoutubeApiKey, firestore } from '../../firebaseConfig';
import { YouTube } from 'better-youtube-api';

export const videoSubmit = link => {
  return dispatch => {
    const youtube = new YouTube(myYoutubeApiKey);
    youtube.getVideoByUrl(link).then(videoData => {
      firestore
        .collection('videos')
        .doc(videoData.id)
        .set({
          id: videoData.id,
          title: videoData.data.snippet.title,
          thumbnail: videoData.data.snippet.thumbnails.medium.url,
          likes: [],
          dislikes: []
        })
        .then(_ => dispatch({ type: actionTypes.VIDEO_SUBMIT }));
    });
  };
};

export const fetchVideos = () => {
  return dispatch => {
    firestore.collection('videos').onSnapshot(snapshot => {
      const array = snapshot.docs.map(el => el.data());
      dispatch({ type: actionTypes.FETCH_VIDEOS, payload: array });
    });
  };
};

export const likeVideo = (id, userEmail) => {
  return dispatch => {
    const video = firestore.collection('videos').doc(id);

    video.get().then(doc => {
      let data = doc.data();
      data.likes = [...data.likes, userEmail];
      video.set(data);
    });
  };
};
