import React from "react";
import '../ActivitiesList/ActivitiesList.jsx'

export default function Activity ({ name, duration, season, difficulty, countryId }) {
  return (
    <div className='divActivityContainter'>
      <h2>{name}</h2>
      <h3>Duración: {duration}</h3>
      <h3>Season: {season}</h3>
      <h3>Difficulty: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  )
}