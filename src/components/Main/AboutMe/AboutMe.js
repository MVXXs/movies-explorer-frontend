import React from "react";
import './AboutMe.css';
import aboutPhoto from '../../../images/about__photo.png';

export default function AboutMe() {
    return (
        <section className="student" id="student">
            <h2 className="student__title">Студент</h2>
            <div className="student__info">
                <div className="student__text">
                    <h3 className="student__name">Максим</h3>
                    <h4 className="student__profession">Фронтенд-разработчик, 19 лет</h4>
                    <p className="student__paragraph">Я родился в Нижнем Новгороде, на данный момент живу в г.Казани, закончил факультет информационной безопасности КИТ в ИКТЗИ.
                    Увлекаюсь горными лыжами, изучением иностранных языков и информационными технологиями. Во время обучения в колледже заинтересовался веб-разработкой. Прошёл курс Яндекс.Практикум по направлению «Веб-разработка»</p>
                    <a href="https://github.com/MVXXs" className="student__link" target="_blank" rel="noreferrer noopener">Github</a>
                </div>
                <div className="student__photo">
                    <img src={aboutPhoto} className='student__image' alt="Фотография разработчика"></img>
                </div>
            </div>
        </section>
    )
}