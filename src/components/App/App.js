import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom"
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as auth from '../../utils/Auth';
import { apiMain } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();

  const isHeader = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
  const isFooter = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies'

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [infoTooltip, setInfoTooltip] = useState(false);

  useEffect(() => {
    if(loggedIn){
      setIsLoading(true);
      apiMain.getUserInfo()
        .then((res) => {
            setCurrentUser(res);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => setIsLoading(false));
      }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        auth.checkToken(jwt)
            .then((res) => {
                setLoggedIn(true);
                setEmail(res.email);
                setName(res.name);
                navigate(location);
            })
            .catch(err => console.log(err));
    }
  }, [loggedIn]);

  function handleUpdateUser(item) {
      apiMain.editUserInfo(item).then((res) => {
          setInfoTooltip(true);
          setCurrentUser(res);
      })
      .catch(() => {
        setError(true);
      })
  }

  function handleMovieSave(movie) {
    const isMovieSaved = savedMovies.some(m => m.movieId === movie.id);
    const isMovieSavedForDelete = savedMovies.find(m => m.movieId === movie.id)

    if(!isMovieSaved) {
      apiMain.saveMovie(movie).then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      })
    } else {
      handleMovieDelete(isMovieSavedForDelete);
    }
}
  
  function handleMovieDelete(movie) {
    apiMain.deleteSavedMovie(movie._id)
            .then(() => {
              setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            })
  }

  useEffect(() => {
    if(loggedIn){
      apiMain.getSavedMovies()
              .then((movie) => {
                setSavedMovies(movie);
              })
              .catch((err) => {
                console.log(`Ошибка: ${err}`);
              })
    }
  }, [loggedIn]);

  function handleLogin(password, email) {
    auth.authorize(password, email)
      .then(res => {
          localStorage.setItem('jwt', res.token)
          setLoggedIn(true);
          navigate("/movies");
      })
      .catch(() => {
        setError(true);
      })
  }

  function handleRegister(password, email, name) {
      auth.register(password, email, name)
        .then(() => {
            handleLogin(password, email);
            navigate("/movies");
        })
        .catch(() => {
          setError(true);
        });
  }

  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
  }  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        { isHeader && <Header isLoggedIn={loggedIn}/>}
          <Routes>
            <Route path='/sign-up' element={ loggedIn ? <Navigate to='/' /> :  <Register onRegister={handleRegister} errorServer={error} setErrorServer={setError}/>} />
            <Route path='/sign-in' element={ loggedIn ? <Navigate to='/' /> : <Login onLogin={handleLogin} errorServer={error} setErrorServer={setError}/>} />
            <Route path='/' element={<Main loggedIn={loggedIn}/>} />
            <Route path='/movies' element={<ProtectedRoute element={Movies} loggedIn={loggedIn} movies={movies} isLoad={isLoading} onMovieSave={handleMovieSave} savedMovies={savedMovies} onMovieDelete={handleMovieDelete}/>} />
            <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} movies={savedMovies} onMovieDelete={handleMovieDelete} />} />
            <Route path='/profile' element={<ProtectedRoute element={Profile} loggedIn={loggedIn} email={email} name={name} signOut={signOut} onUpdateUser={handleUpdateUser} errorServer={error} setErrorServer={setError} isOk={infoTooltip} setIsOk={setInfoTooltip}/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        { isFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;