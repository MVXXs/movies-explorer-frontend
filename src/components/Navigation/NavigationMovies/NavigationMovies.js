import React from "react";
import { useState } from 'react';
import './NavigationMovies.css';
import { NavLink } from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";


export default function NavigationMovies() {
    const [isMobile, setIsMobile] = useState(false);

    function handleOpenMenu() {
        setIsMobile(true);
    }

    function handleCloseMenu() {
        setIsMobile(false);
    }

    return (
            <div className="navigation-movies">
                <ul className="navigation-movies__list">
                    <li className="navigation-movies__link">
                        <NavLink className={({isActive}) => `navigation-movies__links ${isActive ? "navigation-movies__links_active" : ""}`} to="/movies">Фильмы</NavLink>
                    </li>
                    <li className="navigation-movies__link">
                        <NavLink className={({isActive}) => `navigation-movies__links ${isActive ? "navigation-movies__links_active" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <div className="navigation-movies__account">
                    <NavLink className="navigation-movies__links" to="/profile">
                        <p className="navigation-movies__paragraph">Аккаунт</p>
                        <div className="navigation-movies__icon"></div>
                    </NavLink>
                </div>
                <button className="navigation-movies__menu" onClick={handleOpenMenu}></button>
                {isMobile && <NavigationMenu onClose={handleCloseMenu}/>}
            </div>
    )
}