import React from 'react'
import PropTypes from 'prop-types'

export const Movie = ({urlImage, title, year}) => (
    <div className="movie">
        <img src={urlImage} alt="Movie cover" height={200} width={150} />
        <br/>
        <span>{title}</span>
        <br/>
        <span>{year}</span>
    </div>
)

Movie.PropTypes = {
    urlImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.number
}

