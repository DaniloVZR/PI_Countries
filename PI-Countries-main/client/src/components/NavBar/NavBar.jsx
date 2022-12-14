import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <Link className="navbar__title" to='/Home'>
          <h1>Henry Countries</h1>
        </Link>
        <div className="navbar__options">
          <Link className='navbar__link' to='/Activity'>Create Activity</Link>
          <Link className='navbar__link' to='/Activities'>Activities List</Link>
          <SearchBar/>
        </div>
      </div>
    </nav>
  )
}