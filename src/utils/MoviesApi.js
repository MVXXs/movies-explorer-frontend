 class MoviesApi {
    constructor(item) {
        this._baseUrl = item.baseUrl;
        // this._headers = item.headers;
    }

    _checkDataError(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then (this._checkDataError);
    }
 }

 export const apiMovies = new MoviesApi({ baseUrl: 'https://api.nomoreparties.co/beatfilm-movies' });