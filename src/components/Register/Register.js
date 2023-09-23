import { useEffect } from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../utils/hooks'
import { EMAIL_REGEX_VALIDATION } from '../../utils/regex';

export default function Register(props) {
    const validate = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onRegister(validate.values.password, validate.values.email, validate.values.name);
    }

    useEffect(() => {
        props.setErrorServer(false);
    }, [props.setErrorServer]);

    return (
        <section className="register">
            <div className="register__header">
                <Link to="/">
                    <img src={logo} className="register__logo" alt="логотип mvxxs movies" />
                </Link>
            </div>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" name="login" noValidate onSubmit={handleSubmit}>
                <label className="register__label" htmlFor="name">Имя</label>
                <input className="register__input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" value={validate.values.name} onChange={validate.handleChange} required />
                <span className="register__error">{validate.errors.name}</span>
                <label className="register__label" htmlFor="email">E-mail</label>
                <input className="register__input" type="email" name="email" placeholder="Email" pattern={EMAIL_REGEX_VALIDATION} onChange={validate.handleChange} value={validate.values.email} required />
                <span className="register__error">{validate.errors.email}</span>
                <label className="register__label" htmlFor="password">Пароль</label>
                <input className="register__input" type="password" name="password" placeholder="Пароль" minLength="6" maxLength="30" value={validate.values.password} onChange={validate.handleChange} required />
                <span className="register__error">{validate.errors.password}</span>
                {props.errorServer ? <span className="register__error register__error_server">При регистрации пользователя произошла ошибка</span> : <span className="register__error register__error_server"></span>}
                <button className="register__saved" type="submit" disabled={!validate.isValid}>Зарегистрироваться</button>
            </form>
            <p className="register__description">Уже зарегистрированы? <Link className="register__link" to="/sign-in">Войти</Link></p>
        </section>
    )
}