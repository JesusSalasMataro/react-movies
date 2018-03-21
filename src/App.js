import React, { Component } from 'react';
import './App.css';

const Title = () => 
    <h3>Movies finder</h3>

class Searcher extends Component {

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

class MoviesList extends Component {
  
    render() {

        let movies = 'No results found'

        if (this.props.movies !== undefined) {
          movies = this.props.movies.map(m => <p>{m.Title}</p>)
        }  

        return ( 
            <div>
                {movies}
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        movies: []
    }

    loadMovies = (movies) => {
        this.setState({movies: movies})
    }

    render() {
        return (
            <div className="App">
                <Title />
                <Searcher loadMovies={this.loadMovies}/>
                <MoviesList movies={this.state.movies}/>
            </div>
        )
    }
}


