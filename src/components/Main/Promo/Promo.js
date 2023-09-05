import React from "react";
import './Promo.css';
import practicumLogo from '../../../images/promo__logo.svg'

export default function Promo() {
    return (
        <section className="promo">
            <img src={practicumLogo} className="promo__logo" alt="логотип Яндекс.Практикум"></img>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}