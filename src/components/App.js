import React from 'react'
import SearchBar from './SearchBar'
import SideBar from './Sidebar'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

class App extends React.Component {
  state = {
    response: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.handleSubmit('buildings')
  }
  handleVideoClick = (video) => {
    // console.log('inside app selectedVideo: ',video)
    this.setState({ selectedVideo: video })
  }
  handleSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    })
    //Axios call async await
    // this.setState({query: response})
    this.setState({ 
      response: response.data.items, 
      selectedVideo: response.data.items[0] 
    })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <SideBar videoData={this.state.response} handleVideoClick={this.handleVideoClick}/>
            </div>
          </div>
        </div>
        You are searching for: {this.state.response.length} videos
      </div>
    )
  }
}
export default App