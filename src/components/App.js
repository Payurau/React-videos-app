import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  //when app first loads do a search for
  componentDidMount() {
    this.onTermSubmit('react')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })
    this.setState({
      videos: response.data.items,
      // take first video of serach result and set it as default video
      selectedVideo: response.data.items[0],
    })
  }

  /* this is a callback method */
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* doesn't have to be same name, onvideoselect in both.
        We pass the callback method as a prop to videoList */}
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
