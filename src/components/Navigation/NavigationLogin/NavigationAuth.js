import { useState } from 'react';
import './NavigationAuth.css';
import { NavLink } from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";


export default function NavigationAuth() {
    const [isMobile, setIsMobile] = useState(false);

    function handleOpenMenu() {
        setIsMobile(true);
    }

    function handleCloseMenu() {
        setIsMobile(false);
    }

    return (
            <div className="navigation-auth">
                <ul className="navigation-auth__list">
                    <li className="navigation-auth__link">
                        <NavLink className='navigation-auth__links' to="/movies">Фильмы</NavLink>
                    </li>
                    <li className="navigation-movies__link">
                        <NavLink className='navigation-auth__links' to="/saved-movies">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <div className="navigation-auth__account">
                    <NavLink className="navigation-auth__links" to="/profile">
                        <p className="navigation-auth__paragraph">Аккаунт</p>
                        <div className="navigation-auth__icon"></div>
                    </NavLink>
                </div>
                <button className="navigation-auth__menu" onClick={handleOpenMenu}></button>
                {isMobile && <NavigationMenu onClose={handleCloseMenu}/>}
            </div>
    )
}