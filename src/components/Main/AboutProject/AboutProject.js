import React from "react";
import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className="project" id="about">
            <h2 className="project__title">О проекте</h2>
            <div className="project__info">
                <div className="project__block">
                    <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__block">
                    <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__timeline">
                <div className="project__back">
                    <p className="project__time-back">1 неделя</p>
                    <p className="project__name">Back-end</p>
                </div>
                <div className="project__front">
                    <p className="project__time-front">4 недели</p>
                    <p className="project__name">Front-end</p>
                </div>
            </div>
        </section>
    )
}