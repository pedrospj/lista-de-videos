import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideoList.css';

const VideoList = ({ videosArray }) => (
  <ul className="videolist-ul">
    {videosArray.map(video => (
      <VideoItem key={video.id} {...video} />
    ))}
  </ul>
);

export default VideoList;
