import React from "react";
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login">
            <div className="login__header">
                <Link to="/">
                    <img src={logo} className="login__logo" alt="логотип mvxxs movies" />
                </Link>
            </div>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" name="login">
                <label className="login__label" htmlFor="email">E-mail</label>
                <input className="login__input" type="email" name="email" placeholder="Email" required />
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input" type="password" name="password" placeholder="Пароль" minlength="6" maxlength="30" required />
                <button className="login__saved" type="submit">Войти</button>
            </form>
            <p className="login__description">Ещё не зарегистрированы? <Link className="login__link" to="/sign-up">Регистрация</Link></p>
        </section>
    )
}