import React from "react";
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__name">Статичный сайт</p>
                    <a href="https://github.com/MVXXs/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer noopener">↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <a href="https://github.com/MVXXs/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer noopener">↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <a href="https://github.com/MVXXs/react-mesto-auth" className="portfolio__link" target="_blank" rel="noreferrer noopener">↗</a>
                </li>
            </ul>
        </section>
    )
}