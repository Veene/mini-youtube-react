import React from 'react'
import PropTypes from 'prop-types'
import './VideoItem.css'

const VideoItem = ({ video, videoClick }) => {
  
  return (
    <div onClick={() => videoClick(video)} className="item video-item">
      <img 
        className="ui image" 
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">Title: {video.snippet.title}</div>
      </div>
    </div>
    
  )
}
VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  videoClick: PropTypes.func.isRequired
}

export default VideoItem