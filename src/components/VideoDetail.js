import React from 'react'
import PropTypes from 'prop-types'

const VideoDetail = (props) => {
  if(props.video) {
    return (
      <div >
        <div className="ui embed">
          <iframe
            title="video player" 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        <div className="ui segment">
          <h4 className="header">{props.video.snippet.title}</h4>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>No video selected</div>
    )
  }
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoDetail