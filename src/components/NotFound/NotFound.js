import React from "react";
import './NotFound.css'
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="undefined">
            <div className="undefined__text">
                <h2 className="undefined__title">404</h2>
                <p className="undefined__subtitle">Страница не найдена</p>
            </div>
            <Link className="undefined__link" onClick={() => navigate(-4)}>Назад</Link>
        </main>
    )
}