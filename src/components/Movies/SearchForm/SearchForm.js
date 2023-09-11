import React from "react";
import './SearchForm.css';

export default function SearchForm() {
    return (
        <section className="search">
            <form className="search__form" name="search-form">
                <input className="search__input" type="text" name="search" placeholder="Фильм" minLength="2" required />
                <button className="search__button" title="Поиск" type="button"></button>
            </form>
            <div className="search__filter">
                <input className="search__short" type="checkbox" id="filter"></input>
                <label className="search__label" htmlFor="filter"></label>
                <p className="search__text">Короткометражки</p>
            </div>
        </section>
    )
}