import React from "react";
import './Navigation.css';
import { Link, useLocation } from "react-router-dom";
import NavigationMovies from "./NavigationMovies/NavigationMovies";

export default function Navigation() {
    const location = useLocation();

    return (
        <>
        {location.pathname === '/' ? (<div className="navigation">
        <ul className="navigation__list">
            <li className="navigation__link">
                <Link className="navigation__register" to="/sign-up">Регистрация</Link>
            </li>
            <li className="navigation__link navigation__link_green">
                <Link className="navigation__login" to="/sign-in">Войти</Link>
            </li>
        </ul>
    </div>) : <NavigationMovies />}
        </>
    )
}