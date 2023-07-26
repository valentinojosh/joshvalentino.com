import React from 'react';
import ReactPlayer from 'react-player';
import videoFile from '../Assets/IncompleteDemo.mp4';
import '../Styles/Error.css';

const Demo = () => {
  return (
    <div className='error-container'>
      <div className='error-text'>
        <h1>
            <ReactPlayer url={videoFile} controls playing />
        </h1>
      </div>
    </div>
  );
};

export default Demo;
