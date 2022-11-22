import React from "react";
import './Card.css';

export default function Card ({ name, flag, continent, capital, population, id }) {
  return (
    <div className="Card_Box">
      <h3 className="Card__Name">{name}</h3>
      <img className='Card__Img' src={flag} alt={name}/>
      <div className='Card__Info__Container'>
        <h5 className="Card__Info">Capital: {capital}</h5>
        <h5 className="Card__Info">Continente: {continent}</h5>
        <h5 className="Card__Info">poblacion: {population}</h5>
      </div>
    </div>
  )
};