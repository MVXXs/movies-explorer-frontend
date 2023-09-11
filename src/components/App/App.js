import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from "react-router-dom"
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();

  const isHeader = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
  const isFooter = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies'

  return (
    <div className="page">
      { isHeader && <Header />}
        <Routes>
          <Route path='/sign-up' element={<Register />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      { isFooter && <Footer />}
    </div>
  );
}

export default App;