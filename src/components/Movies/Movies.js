import React from "react";
import './Movies.css'
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {useState, useEffect} from 'react';
import Preloader from './Preloader/Preloader';
import {
  DURATION_SHORT_MOVIE,
} from '../../utils/constants';

export default function Movies(props) {
  const [valueSearch, setValueSearch] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [isCheck, setIsCheck] = useState(true);

  const moviesFiltered = JSON.parse(localStorage.getItem("movies"));
  const inputSearch = localStorage.getItem("inputTextValue");
  const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));

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

  function searchMovies(short = !isCheck) {
    localStorage.setItem("checkboxStatus", JSON.stringify(short));
     if (valueSearch) {
       const movieSearch = props.movies.filter((movie) => {
         return movie.nameRU.toLowerCase().includes(valueSearch.toLowerCase())
       });
       setMoviesSearch(movieSearch);
       localStorage.setItem("movies", JSON.stringify(movieSearch));
       localStorage.setItem("inputTextValue", valueSearch);
      }
  };

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
            {props.isLoad ? <Preloader /> : <MoviesCardList movies={moviesSearch} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies}/>}
            {inputSearch && moviesSearch.length <= 0 && <p className="movies__undefined">Ничего не найдено</p>}
        </main>
    )
} 