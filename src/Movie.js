import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

import LinesEllipsis from 'react-lines-ellipsis'


function Movie({title, poster, genres, synopsis}){
    return (
        <div className = "Movie">
            <div className = "Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genres={genre} key={index}></MovieGenre>)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                </div>
            </div>
        </div>
    )
}


function MovieGenre({genres}){
    return (
        <span className="Movie__Gerne">{genres} </span>
    )
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt = {alt} title={alt} className="Movie__Poster"/>
    )
}


Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}


export default Movie;