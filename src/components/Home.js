import React, { Component } from 'react'
import { Title } from './Title'
import MoviesList from './MoviesList'
import Searcher from './Searcher'

export default class Home extends Component {

    state = {
        movies: [],
        searchUsed: false
    }

    loadMovies = (movies) => {
        this.setState({movies, searchUsed: true})
    }    

    render() {
        
        return (
            <div>
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