import React, { Component } from 'react'
import { Movie } from './Movie'
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
    
    render() {
        let moviesList

        this.props.movies.length === 0
            ?   moviesList = 'No results found'
            :   moviesList = this.props.movies.map(m => 
                    <Movie 
                        key={m.imdbID} 
                        id={m.imdbID}
                        urlImage={m.Poster} 
                        title={m.Title} 
                        year={parseInt(m.Year, 10)} 
                    />
            )
    
        return ( 
            <div>
                {moviesList}
            </div>
        )
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array
}
