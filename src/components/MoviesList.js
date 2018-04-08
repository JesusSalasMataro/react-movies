import React, { Component } from 'react'
import { Movie } from './Movie'

export default class MoviesList extends Component {
    
    render() {
        let moviesList = 'No results found'

        if (this.props.movies !== undefined) {
            moviesList = this.props.movies.map(m => <Movie key={m.imdbID} urlImage={m.Poster} title={m.Title} year={m.Year} />)
        }  
    
        return ( 
            <div>
                {moviesList}
            </div>
        )
    }
}