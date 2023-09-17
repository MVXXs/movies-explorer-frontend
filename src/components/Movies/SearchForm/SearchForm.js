import {useState} from 'react';
import './SearchForm.css';

export default function SearchForm(props) {
    const [error, setError] = useState('');

    const handleChange = (e) => {
      props.setValueSearch(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.filteredMovies();
      props.setValueSearch(props.valueSearch);

      if(!props.valueSearch) {
        setError('Нужно ввести ключевое слово');
      } else {
        setError('');
      }
    };

    const handleInputCheckbox = (evt) => {
        if(props.handleCheck) {
            props.handleCheck(evt.target.checked);
        }
    }

    return (
        <section className="search">
            <form className="search__form" name="search-form" onSubmit={handleSubmit} noValidate>
                <input className="search__input" type="text" name="search" placeholder="Фильм" required onChange={handleChange} value={props.valueSearch}/>
                <span className="search__error">{error}</span>
                <button className="search__button" title="Поиск" type="submit"></button>
            </form>
            <div className="search__filter">
                <input className="search__short" type="checkbox" id="filter" onChange={handleInputCheckbox} checked={props.isCheck}></input>
                <label className="search__label" htmlFor="filter"></label>
                <p className="search__text">Короткометражки</p>
            </div>
        </section>
    )
}