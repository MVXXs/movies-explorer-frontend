import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import durationMath from "../../../utils/durationMath";

export default function MoviesCard(props) {
    const location = useLocation();

    const isSave = props.savedMovies ? props.savedMovies.some((item) => item.movieId === props.movies.id) : false;
    const imageUrl = props.movies.image.url ? `https://api.nomoreparties.co/${props.movies.image.url}` : props.movies.image;

    const handleLikeClick = () => {
        props.onMovieSave(props.movies);
    };

    const handleDeleteClick = () => {
        props.onMovieDelete(props.movies);
    }

    return (
        <article className="movies-card">
                <a href={props.movies.trailerLink} className="movies-card__trailer-link" target="_blank" rel="noreferrer noopener">
                    <img src={imageUrl} alt={`обложка фильма ${props.movies.nameRU}`} className="movies-card__image"></img>
                </a>
                <div className="movies-card__items">
                    <div className="movies-card__container">
                        <h2 className="movies-card__title">{props.movies.nameRU}</h2>
                        <span className="movies-card__counter">{durationMath(props.movies.duration)}</span>
                    </div>
                    {location.pathname === '/saved-movies' ? <button className='movies-card__like movies-card__like_off' type="button" onClick={handleDeleteClick}></button> : <button className={`movies-card__like ${isSave ? 'movies-card__like_active' : ''}`} type="button" onClick={handleLikeClick}></button> }
                </div>
        </article>
    )
}