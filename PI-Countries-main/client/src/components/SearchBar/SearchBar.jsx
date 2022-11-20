import { useState } from 'react';
import { }
import { searchCountries } from '../../redux/actions/index.js';

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
    <div className='formSearchBar'>
      <form onSubmit={onSubmit}>
        <input className='inputCountry' type='text' placeholder='Write a country' onChange={onInputChange} value={search}/>
        <input className='inputbutton' type='submit' value=''/>
      </form>
    </div>
  )
}