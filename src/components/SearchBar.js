import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  state = {
    searchInput: ''
  }
  handleInput = (e) => {
    this.setState({ searchInput: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.handleSubmit(this.state.searchInput)
  }
  passInput = () => {

  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input value={this.state.searchInput} onChange={this.handleInput} type="text" />
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SearchBar