import React from 'react'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'


const Sidebar = (props) => {
  const vids = props.videoData.map((video) => {
    return <VideoItem key={video.etag} video={video} videoClick={props.handleVideoClick}/>
  })
  return (
    <div className="ui relaxed divided list">{vids}</div>
  )
}

Sidebar.propTypes = {
  videoData: PropTypes.array.isRequired,
  handleVideoClick: PropTypes.func.isRequired
}

export default Sidebar