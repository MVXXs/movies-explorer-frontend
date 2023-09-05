import React from "react";
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="register">
            <div className="register__header">
                <Link to="/">
                    <img src={logo} className="register__logo" alt="логотип mvxxs movies" />
                </Link>
            </div>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" name="login">
                <label className="register__label" htmlFor="name">Имя</label>
                <input className="register__input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" required />
                <label className="register__label" htmlFor="email">E-mail</label>
                <input className="register__input" type="email" name="email" placeholder="Email" required />
                <label className="register__label" htmlFor="password">Пароль</label>
                <input className="register__input" type="password" name="password" placeholder="Пароль" minLength="6" maxLength="30" required />
                <span className="register__error">Что-то пошло не так...</span>
                <button className="register__saved" type="submit">Зарегистрироваться</button>
            </form>
            <p className="register__description">Уже зарегистрированы? <Link className="register__link" to="/sign-in">Войти</Link></p>
        </section>
    )
}