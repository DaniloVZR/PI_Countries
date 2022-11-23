import React from "react";
import './Paginado.css'

export default function Paginado({ countriesPerPage, countries, paginado }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className='Paginado'>
      <ul className="Paginado__List">
        {pageNumbers && pageNumbers.map(number => (
          <li key={number}>
            <button className='Paginado__Number' onClick={() => paginado(number)}> {number} </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}