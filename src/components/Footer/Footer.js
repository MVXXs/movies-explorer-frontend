import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
                <p className="footer__copyright">© 2023</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer noopener">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a href="https://github.com/MVXXs" className="footer__link" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}