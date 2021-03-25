import React from 'react'
import VideoItem from './VideoItem'

/* onVideoSelect is callback passed from app */

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    // video is now prop that contains all info from video
    // pass the callback prop from app to videoitem as 'onVideoSelect'
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList
