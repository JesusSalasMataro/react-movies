import React, { Component } from 'react'
import { Movie } from './Movie'
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
    
    render() {
        let moviesList

        this.props.movies === undefined 
            ?   moviesList = 'No results found'
            :   moviesList = this.props.movies.map(m => 
                    <Movie 
                        key={m.imdbID} 
                        urlImage={m.Poster} 
                        title={m.Title} 
                        year={m.Year} 
                    />
            )
    
        return ( 
            <div>
                {moviesList}
            </div>
        )
    }
}

MoviesList.PropTypes = {
    movies: PropTypes.array
}
