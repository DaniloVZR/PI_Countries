import React from "react";

export default function Paginado({ countriesPerPage, countries, paginado }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className='paginadoContainer'>
      <ul className="ul">
        {pageNumbers && pageNumbers.map(number => (
          <li key={number}>
            <a className='numeroPaginado' href onClick={() => paginado(number)}> {number} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}