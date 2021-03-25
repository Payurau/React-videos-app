import React from 'react'
import './VideoItem.css'

/* onvideoselect is passed from videolist */

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    /* arrow function so we can easily pass an argument */
    /* invoke the callback when clicking and give the clicked video's info to app component*/
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
