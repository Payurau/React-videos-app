import React from 'react'

class SearchBar extends React.Component {
  // search term
  state = { term: '' }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    //callback to app.js
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
