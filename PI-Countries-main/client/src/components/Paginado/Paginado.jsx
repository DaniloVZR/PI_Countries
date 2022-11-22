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
            <a className='Paginado__Number' href onClick={() => paginado(number)}> {number} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}