import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

export default function MoviesCardList() {
    const location = useLocation();
    
    return (
        <section className="movies-list">
            <article className="movies-list__items">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </article>
            <button className={`movies-list__button ${location.pathname === '/movies' ? "" : 'movies-list__button_disabled'}`}>Ещё</button>
        </section>
    )
}