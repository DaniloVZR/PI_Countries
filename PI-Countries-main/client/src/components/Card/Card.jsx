import React from "react";

export default function Card ({ name, flag, continent, capital, population, id }) {
  return (
    <div className="cardContainer">
      <h3>{name}</h3>
      <img className='cardImg' src={flag} alt={name}/>
      <div className='infoConteiner'>
        <h5>Capital: {capital}</h5>
        <h5>Continente: {continent}</h5>
        <h5>poblacion: {population}</h5>
      </div>
    </div>
  )
};