import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Movie = ({id, urlImage, title, year}) => (
    <Link to={`/detail/${id}`}>
        <div className="movie">
            <img src={urlImage} alt="Movie cover" height={200} width={150} />
            <br/>
            <span>{title}</span>
            <br/>
            <span>{year}</span>
        </div>
    </Link>
)

Movie.propTypes = {
    urlImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.number
}

