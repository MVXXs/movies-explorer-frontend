import React, {useState, useEffect, useContext} from 'react';
import './Profile.css';
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/hooks'
import { EMAIL_REGEX_VALIDATION } from '../../utils/regex';

export default function Profile(props) {
    const validate = useFormWithValidation();
    const { email, name } = validate.values;
    
    const currentUser = useContext(CurrentUserContext);
    const disabledButton = validate.isValid && (currentUser.name !== name || currentUser.email !== email)

    useEffect(() => {
        validate.setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateUser({
            name,
            email,
        });
        console.log(props.isOk);
    }

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form" name="profile" onSubmit={handleSubmit}>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="name">Имя</label>
                    <input className="profile__input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" value={validate.values.name || currentUser.name} onChange={validate.handleChange} required />
                </div>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="email">E-mail</label>
                    <input className="profile__input" type="email" name="email" placeholder="Email" pattern={EMAIL_REGEX_VALIDATION} value={validate.values.email || currentUser.email} onChange={validate.handleChange} required />
                </div>
                {props.isOk ? <p className="profile__successful">Профиль успешно обновлён!</p> : <p className="profile__successful"></p>}
                {props.errorServer ? <span className="profile__error">При обновлении профиля произошла ошибка...</span> : <span className="profile__error"></span>}
                <button className="profile__saved" type="submit" disabled={!disabledButton}>Редактировать</button>
                <Link to="/" className="profile__exit" type="submit" onClick={props.signOut}>Выйти из аккаунта</Link>
            </form>
        </section>
    )
}