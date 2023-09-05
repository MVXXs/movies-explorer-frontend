import React from "react";
import './MoviesCard.css';
import moviePicture from '../../../images/movies__picture.png'
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
    const location = useLocation();

    return (
        <article className="movies-card">
                <img src={moviePicture} alt="обложка фильма 33 слова о дизайне" className="movies-card__image"></img>
                <div className="movies-card__items">
                    <div className="movies-card__container">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <span className="movies-card__counter">1ч 47м</span>
                    </div>
                    <button className={`movies-card__like ${location.pathname === '/saved-movies' ? "movies-card__like_off" : ''}`} type="button"></button> 
                </div>
        </article>
    )
}