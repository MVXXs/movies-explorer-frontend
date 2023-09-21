import React from "react";
import './Movies.css'
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {useState, useEffect, useCallback} from 'react';
import Preloader from './Preloader/Preloader';
import {
  DURATION_SHORT_MOVIE,
  DISPLAY_MEDIUM_SIZE,
  DISPLAY_DESKTOP_SIZE,
  DISPLAY_MOBILE_SIZE,
  QUANTITY_MOVIES_FOR_MEDIUM_SIZE,
  QUANTITY_MOVIES_FOR_MOBILE_SIZE,
  QUANTITY_MOVIES_FOR_DESKTOP_SIZE
} from '../../utils/constants';
import { apiMovies } from "../../utils/MoviesApi";

export default function Movies(props) {
  const [valueSearch, setValueSearch] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [isCheck, setIsCheck] = useState(true);
  const [movies, setMovies] = useState([]);

  const [quantityCards, setQuantityCards] = useState(12);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);

  const moviesFiltered = JSON.parse(localStorage.getItem("movies"));
  const inputSearch = localStorage.getItem("inputTextValue");
  const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
  const beatFilmsMovies = JSON.parse(localStorage.getItem('beatfilms'));

  useEffect(() => {
    if(moviesFiltered) {
      setMoviesSearch(moviesFiltered);
    }
    if(inputSearch) {
      setValueSearch(inputSearch);
    }
    if(checkboxStatus) {
      setIsCheck(checkboxStatus);
    }
  }, []);

  useEffect(() => {                                               
    if (!beatFilmsMovies && valueSearch) {
      setIsLoading(true);
      apiMovies.getInitialMovies()
                .then((res) => {
                  setMovies([...res]);
                  localStorage.setItem("beatfilms", JSON.stringify(res));
                })
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false));
    }
  }, [valueSearch, beatFilmsMovies])

  function searchMovies (short = !isCheck) {
      localStorage.setItem("checkboxStatus", JSON.stringify(short));
      moviesCards();
      if (valueSearch && !short) {
       const movieSearch = movies.filter((movie) => {
         return movie.nameRU.toLowerCase().includes(valueSearch.toLowerCase())
       });
       setMoviesSearch(movieSearch);
       setIsCheck(!short);
       localStorage.setItem("movies", JSON.stringify(movieSearch));
       localStorage.setItem("inputTextValue", valueSearch);
      }
      if (valueSearch && short) {
        const movieShortSearch = movies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(valueSearch.toLowerCase()) && movie.duration < DURATION_SHORT_MOVIE
        });
        setMoviesSearch(movieShortSearch);
        setIsCheck(short);
        localStorage.setItem("movies", JSON.stringify(movieShortSearch));
        localStorage.setItem("inputTextValue", valueSearch);
       }
  };

  const moviesCards = useCallback(() => {
    if (windowSize >= DISPLAY_MEDIUM_SIZE && windowSize < DISPLAY_DESKTOP_SIZE) {
        setQuantityCards(QUANTITY_MOVIES_FOR_MEDIUM_SIZE);
    } else if (windowSize <= DISPLAY_MOBILE_SIZE) {
        setQuantityCards(QUANTITY_MOVIES_FOR_MOBILE_SIZE);
    } else {
        setQuantityCards(QUANTITY_MOVIES_FOR_DESKTOP_SIZE);
    }
  }, [windowSize]);

  function showWindowSize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    moviesCards();

    window.addEventListener("resize", showWindowSize);
    return () => window.removeEventListener("resize", showWindowSize);
  }, [moviesCards])

  function handleCheck(short = !isCheck) {
    if(!short) {
      setIsCheck(short);
      searchMovies();
      localStorage.setItem("checkboxStatus", JSON.stringify(short));
    } else {
      setIsCheck(!short);
      const shortFilter = moviesSearch.filter((item) => {
        return item.duration <= DURATION_SHORT_MOVIE;
      })
      setMoviesSearch(shortFilter);
      localStorage.setItem("movies", JSON.stringify(shortFilter));
      localStorage.setItem("checkboxStatus", JSON.stringify(short));
    }
  }

    return (
        <main className="movies">
            <SearchForm valueSearch={valueSearch} setValueSearch={setValueSearch} filteredMovies={searchMovies} isCheck={checkboxStatus} handleCheck={handleCheck}/>
            {isLoading ? <Preloader /> : <MoviesCardList movies={moviesSearch} windowSize={windowSize} quantityCards={quantityCards} setQuantityCards={setQuantityCards} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies}/>}
            {inputSearch && moviesSearch.length <= 0 && <p className="movies__undefined">Ничего не найдено</p>}
        </main>
    )
} 