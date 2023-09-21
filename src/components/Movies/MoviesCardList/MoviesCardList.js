import {useState, useEffect, useCallback} from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
    DISPLAY_DESKTOP_RENDER,
    COUNT_MOBILE_SIZE_ADD_MOVIE,
    COUNT_DESKTOP_SIZE_ADD_MOVIE,
} from '../../../utils/constants';

export default function MoviesCardList(props) {
    const location = useLocation();

    const [quantityCardsSavedMovies, setQuantityCardsSavedMovies] = useState(0)

    const savedMovies = useCallback(() => {
        if(location.pathname === '/saved-movies') {
            setQuantityCardsSavedMovies(props.movies.length);
        }
    })

    function renderNewCards() {
        if (props.windowSize <= DISPLAY_DESKTOP_RENDER) {
            props.setQuantityCards(props.quantityCards + COUNT_MOBILE_SIZE_ADD_MOVIE)
        } else {
            props.setQuantityCards(props.quantityCards + COUNT_DESKTOP_SIZE_ADD_MOVIE)
        }
    }

    useEffect(() => {
        savedMovies();
    }, [savedMovies])
    
    return (
        <section className="movies-list">
            <article className="movies-list__items">
                {props.movies.slice(0, location.pathname === '/saved-movies' ? quantityCardsSavedMovies : props.quantityCards).map((item) => (
                    <MoviesCard movies={item} name={item.name} image={item.image.url} key={item.id} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies}/>
                ))}
            </article>
            {props.movies.length >= props.quantityCards && <button className={`movies-list__button ${location.pathname === '/movies' ? "" : 'movies-list__button_disabled'}`} onClick={renderNewCards}>Ещё</button> }
        </section>
    )
}