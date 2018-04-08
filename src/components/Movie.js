import React from 'react'

export const Movie = ({urlImage, title, year}) => (
    <div className="movie">
        <img src={urlImage} alt="Movie cover" height={200} width={150} />
        <br/>
        <span>{title}</span>
        <br/>
        <span>{year}</span>
    </div>
)