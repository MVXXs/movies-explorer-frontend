import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <form className="profile__form" name="profile">
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="name">Имя</label>
                    <input className="profile__input" type="text" name="name" placeholder="Имя" minlength="2" maxlength="30" value="Виталий" required />
                </div>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="email">E-mail</label>
                    <input className="profile__input" type="email" name="email" placeholder="Email" value="pochta@yandex.ru" required />
                </div>
                <button className="profile__saved" type="submit">Редактировать</button>
                <Link to="/sign-in" className="profile__exit" type="submit">Выйти из аккаунта</Link>
            </form>
        </section>
    )
}