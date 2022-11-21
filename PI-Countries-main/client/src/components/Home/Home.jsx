import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import Cards from '../Cards/Cards.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='cards'>
        <Cards/>
      </div>
    </div>
  )
}