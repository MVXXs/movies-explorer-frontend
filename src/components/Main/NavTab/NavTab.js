import React from "react";
import './NavTab.css';

export default function NavTab() {
    return (
        <section className="menu">
            <nav>
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#about" className="menu__link">О проекте</a>
                    </li>
                    <li className="menu__item">
                        <a href="#techs" className="menu__link">Технологии</a>
                    </li>
                    <li className="menu__item">
                        <a href="#student" className="menu__link">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}