import {useState, useEffect, useCallback} from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
    DISPLAY_MEDIUM_SIZE,
    DISPLAY_DESKTOP_SIZE,
    DISPLAY_MOBILE_SIZE,
    DISPLAY_DESKTOP_RENDER,
    COUNT_MOBILE_SIZE_ADD_MOVIE,
    COUNT_DESKTOP_SIZE_ADD_MOVIE,
    QUANTITY_MOVIES_FOR_MEDIUM_SIZE,
    QUANTITY_MOVIES_FOR_MOBILE_SIZE
} from '../../../utils/constants';

export default function MoviesCardList(props) {
    const location = useLocation();

    const [quantityCards, setQuantityCards] = useState(12);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const moviesCards = useCallback(() => {
        if (windowSize >= DISPLAY_MEDIUM_SIZE && windowSize < DISPLAY_DESKTOP_SIZE) {
            setQuantityCards(QUANTITY_MOVIES_FOR_MEDIUM_SIZE);
        } else if (windowSize <= DISPLAY_MOBILE_SIZE){
            setQuantityCards(QUANTITY_MOVIES_FOR_MOBILE_SIZE);
        }
    }, [windowSize]);

    function showWindowSize() {
        setWindowSize(window.innerWidth);
    }

    function renderNewCards() {
        if (windowSize <= DISPLAY_DESKTOP_RENDER) {
            setQuantityCards(quantityCards + COUNT_MOBILE_SIZE_ADD_MOVIE)
        } else {
            setQuantityCards(quantityCards + COUNT_DESKTOP_SIZE_ADD_MOVIE)
        }
    }

    useEffect(() => {
        moviesCards();

        window.addEventListener("resize", showWindowSize);
        return () => window.removeEventListener("resize", showWindowSize);
    }, [moviesCards])
    
    return (
        <section className="movies-list">
            <article className="movies-list__items">
                {props.movies.slice(0, quantityCards).map((item) => (
                    <MoviesCard movies={item} name={item.name} image={item.image.url} key={item.id} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies}/>
                ))}
            </article>
            {props.movies.length >= quantityCards && <button className={`movies-list__button ${location.pathname === '/movies' ? "" : 'movies-list__button_disabled'}`} onClick={renderNewCards}>Ещё</button> }
        </section>
    )
}