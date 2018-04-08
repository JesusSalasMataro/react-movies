import React, { Component } from 'react'
import { Title } from './components/Title'
import MoviesList from './components/MoviesList'
import Searcher from './components/Searcher'
import './App.css';

export default class App extends Component {

    state = {
        movies: [],
        searchUsed: false
    }

    loadMovies = (movies) => {
        this.setState({movies, searchUsed: true})
    }

    render() {
        return (
            <div className="App">
                <Title>Movies finder</Title>
                <Searcher loadMovies={this.loadMovies}/>
                
                {
                    this.state.searchUsed &&
                    <MoviesList movies={this.state.movies}/>
                }
            </div>
        )
    }
}


