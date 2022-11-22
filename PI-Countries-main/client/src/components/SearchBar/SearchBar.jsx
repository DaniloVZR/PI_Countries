import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions/index';
import './SearchBar.css'

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return alert('You should introduce a country');
    dispatch(searchCountries(search))
    setSearch('')
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input className='form__input' type='text' placeholder='Write a country' onChange={onInputChange} value={search}/>
        <input className='form__button' type='submit' value='Submit'/>
      </form>
    </div>
  )
}