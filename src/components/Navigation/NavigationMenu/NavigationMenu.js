import React from "react";
import './NavigationMenu.css';
import { NavLink } from "react-router-dom";

export default function NavigationMenu(props) {
    return (
            <div className="navigation-menu">
                <div className="navigation-menu__container">
                    <button className="navigation-menu__exit" onClick={props.onClose}></button>
                    <ul className="navigation-menu__list">
                        <li className="navigation-menu__link">
                            <NavLink className={({isActive}) => `navigation-menu__links ${isActive ? "navigation-menu__links_active" : ""}`} to="/">Главная</NavLink>
                        </li>
                        <li className="navigation-menu__link">
                            <NavLink className={({isActive}) => `navigation-menu__links ${isActive ? "navigation-menu__links_active" : ""}`} to="/movies">Фильмы</NavLink>
                        </li>
                        <li className="navigation-menu__link">
                            <NavLink className={({isActive}) => `navigation-menu__links ${isActive ? "navigation-menu__links_active" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                    <div className="navigation-menu__account">
                        <NavLink className={({isActive}) => `navigation-menu__links ${isActive ? "navigation-menu__links_active" : ""}`} to="/profile">
                            <p className="navigation-menu__paragraph">Аккаунт</p>
                            <div className="navigation-menu__icon"></div>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}