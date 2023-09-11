import React from "react";
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className={location.pathname === '/' ? 'header' : 'header header_movies'}>
            <div className="header__wrapper">
                <Link to="/">
                    <img src={logo} className="header__logo" alt="логотип mvxxs movies" />
                </Link>
            </div>
            <Navigation />
        </header>
    )
}