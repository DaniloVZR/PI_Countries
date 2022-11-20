import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div>
          <h1>Henry Countries</h1>
        </div>
        <div>
          <Link to='/Home'>Home</Link>
          <Link to='/Activity'>Create Activity</Link>
          <Link to='/Activities'>Activities List</Link>
          <SearchBar/>
        </div>
      </div>
    </nav>
  )
}