import {useState, useEffect} from 'react';
import './SavedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import {
  DURATION_SHORT_MOVIE,
} from '../../utils/constants';

export default function SavedMovies(props) {
    const [inputSearch, setValueSearch] = useState("");
    const [shortMoviesSearch, setShortMoviesSearch] = useState([]);
    const [isCheck, setIsCheck] = useState(true);

    function handleShortCheck() {
        if(!isCheck) {
          setIsCheck(true);
          filteredSavedMovies();
        } else {
          setIsCheck(false);
          const shortFilter = shortMoviesSearch.filter((movie) => {
            return movie.duration <= DURATION_SHORT_MOVIE;
          })
          setShortMoviesSearch(shortFilter);
        }
      }

      function filteredSavedMovies() {
        setShortMoviesSearch(props.movies);
         if (inputSearch) {
           const moviesShortFilter = props.movies.filter((movie) => {
             return movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase())
           });
           setShortMoviesSearch(moviesShortFilter)
          }
      };

      useEffect(() => {
        filteredSavedMovies();
      }, [props.movies]);


    return (
        <main className="saved-movies">
            <SearchForm valueSearch={inputSearch} setValueSearch={setValueSearch} filteredMovies={filteredSavedMovies} handleCheck={handleShortCheck}/>
            {shortMoviesSearch.length > 0 ? <MoviesCardList movies={shortMoviesSearch} onMovieDelete={props.onMovieDelete}/> : <p className="saved-movies__undefined">Ничего не найдено</p>}
        </main>
    )
}