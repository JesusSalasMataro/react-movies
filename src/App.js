import React, { Component } from 'react'
import { Title } from './components/Title'
import MoviesList from './components/MoviesList'
import Searcher from './components/Searcher'
import './App.css';

export default class App extends Component {

    state = {
        movies: []
    }

    loadMovies = (movies) => {
        this.setState({movies})
    }

    render() {
        return (
            <div className="App">
                <Title>Movies finder</Title>
                <Searcher loadMovies={this.loadMovies}/>
                <MoviesList movies={this.state.movies}/>
            </div>
        )
    }
}


