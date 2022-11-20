import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='landingPage'>
      <div className='landing__box'>
        <h1 className='landing__title welcome'><b>Welcome</b></h1>
        <h2 className='landing__title'>To My Henry Project</h2>
        <Link to = '/Home'>
          <button className='landing__button'>Get In</button>
        </Link>
      </div>
    </div>
  )
}