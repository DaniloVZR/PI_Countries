import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='landingPage'>
      <h1 className='landingTitle'>Welcome</h1>
      <h2 className='landingTitle'>To My Henry Project</h2>
      <Link to = '/home'>
        <button className='landingButton'>Get In</button>
      </Link>
    </div>
  )
}