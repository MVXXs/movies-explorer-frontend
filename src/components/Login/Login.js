import { useEffect } from "react";
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../utils/hooks'
import { EMAIL_REGEX_VALIDATION } from '../../utils/regex';

export default function Login(props) {
    const validate = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onLogin(validate.values.password, validate.values.email);
    }

    useEffect(() => {
        props.setErrorServer(false);
    }, [props.setErrorServer]);

    return (
        <section className="login">
            <div className="login__header">
                <Link to="/">
                    <img src={logo} className="login__logo" alt="логотип mvxxs movies" />
                </Link>
            </div>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" name="login" onSubmit={handleSubmit}>
                <label className="login__label" htmlFor="email">E-mail</label>
                <input className="login__input" type="email" name="email" placeholder="Email" value={validate.values.email} onChange={validate.handleChange} pattern={EMAIL_REGEX_VALIDATION} required />
                <span className="login__error">{validate.errors.email}</span>
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input" type="password" name="password" placeholder="Пароль" minLength="6" maxLength="30" value={validate.values.password} onChange={validate.handleChange} required />
                <span className="login__error">{validate.errors.password}</span>
                {props.errorServer ? <span className="login__error login__error_server">При авторизации произошла ошибка. Токен не передан или передан не в том формате</span> : <span className="login__error login__error_server"></span>}
                <button className="login__saved" type="submit" disabled={!validate.isValid}>Войти</button>
            </form>
            <p className="login__description">Ещё не зарегистрированы? <Link className="login__link" to="/sign-up">Регистрация</Link></p>
        </section>
    )
}