import React, { Component } from 'react'

export default class Searcher extends Component {

    state = {
        searchText: ''
    }

    loadMovies = () => {
        fetch('http://www.omdbapi.com/?apikey=8f92894a&s=' + this.state.searchText)
            .then(response => response.json())
            .then(response => this.props.loadMovies(response.Search))
    }

    updateSearchText = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Title..." onBlur={this.updateSearchText} />
                <input type="button" value="Search" onClick={this.loadMovies} />
            </div>
        )
    }
}