import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Home</h1>
      <div className='navbar'>
        <NavBar/>
      </div>
    </div>
  )
}