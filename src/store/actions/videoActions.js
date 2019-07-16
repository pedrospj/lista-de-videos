import * as actionTypes from '../actionTypes';
import { myYoutubeApiKey, firestore } from '../../firebaseConfig';
import { YouTube } from 'better-youtube-api';

export const videoSubmit = (link, userEmail) => {
  return dispatch => {
    const youtube = new YouTube(myYoutubeApiKey);
    youtube.getVideoByUrl(link).then(videoData => {
      console.log(videoData, 'data');
      firestore
        .collection('videos')
        .doc(videoData.id)
        .set({
          id: videoData.id,
          title: videoData.data.snippet.title,
          thumbnail: videoData.data.snippet.thumbnails.medium.url,
          likes: [],
          dislikes: [],
          user: userEmail
        })
        .then(_ => dispatch({ type: actionTypes.VIDEO_SUBMIT }));
    });
  };
};

export const fetchVideos = () => {
  return dispatch => {
    firestore.collection('videos').onSnapshot(snapshot => {
      let array = snapshot.docs.map(el => el.data());
      array.sort((videoA, videoB) => videoB.likes.length - videoA.likes.length);
      dispatch({ type: actionTypes.FETCH_VIDEOS, payload: array });
    });
  };
};

export const rateVideo = (id, userEmail, option) => {
  return dispatch => {
    const video = firestore.collection('videos').doc(id);

    if (option === 'like') {
      //dar like em um vídeo
      video.get().then(doc => {
        let videoData = doc.data();
        if (videoData.dislikes.includes(userEmail)) {
          //remover do array de dislikes
          videoData.dislikes = videoData.dislikes.filter(
            email => email !== userEmail
          );
        }
        if (!videoData.likes.includes(userEmail)) {
          videoData.likes = videoData.likes.concat(userEmail);
        }
        video.set(videoData);
      });
    } else {
      //dar dislike em um vídeo
      video.get().then(doc => {
        let videoData = doc.data();
        if (videoData.likes.includes(userEmail)) {
          //remover do array de likes
          videoData.likes = videoData.likes.filter(
            email => email !== userEmail
          );
        }
        if (!videoData.dislikes.includes(userEmail)) {
          videoData.dislikes = videoData.dislikes.concat(userEmail);
        }
        video.set(videoData);
      });
    }
  };
};
