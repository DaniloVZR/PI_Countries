import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterByContinent, filterByActivity, orderByName, orderByPopulation, getActivities } from "../../redux/actions/index";
import { LESS_POPULATION, HIGHER_POPULATION, ALL, ALL_AFRICA, ALL_N_AMERICA, ALL_S_AMERICA, ALL_ASIA, ALL_EUROPE, ALL_OCEANIA, ASC, DESC } from "../../const/Const";
import Card from '../Card/Card.jsx';
import Paginado from '../Paginado/Paginado.jsx';
import './Cards.css';

export default function Cards () {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function reloadButton(e) {
    e.preventDefault()
    dispatch(getCountries())
  }

  function handleFilterContinent(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenador ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className='Cards__Container'>
      <div className='Filter__Container'>
        <button id='b1' className='Filter__Option' onClick={(e) => reloadButton(e)}>Refresh</button>
          <select 
            className='Filter__Option'
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option>Filter By Alphabetic Orden</option>
            <option value={ASC}>A - Z</option>
            <option value={DESC}>Z - A</option>
          </select>

          <select 
            className='Filter__Option'
            onChange={(e) => {
              handleSort2(e);
            }}
          >
            <option>Filter By Population</option>
            <option value={HIGHER_POPULATION}>HIGHER POPULATION</option>
            <option value={LESS_POPULATION}>LOWER POPULATION</option>
          </select>

          <select 
            className='Filter__Option'
            onChange={(e) => handleFilterActivity(e)}
          >
            <option value='todos'>Activities</option>
            {activities.map((v) => (
              <option value={v.name}>{v.name}</option>
            ))}
          </select>

          <select
            className='Filter__Option'
            onChange={(e) => handleFilterContinent(e)}
          >
            <option value={ALL}>All Continents</option>
            <option value={ALL_AFRICA}>Africa</option>
            <option value={ALL_N_AMERICA}>North America</option>
            <option value={ALL_S_AMERICA}>South America</option>
            <option value={ALL_ASIA}>Asia</option>
            <option value={ALL_EUROPE}>Europe</option>
            <option value={ALL_OCEANIA}>Oceania</option>
          </select>
      </div>

      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      /> 

      <div className='Cards__Box'>
        {currentCountry?.map((country) => {
          return (
            <div className='Card' key={country.id}>
              <Link className="Card__Link" to={'/home/' + country.id}>
                <Card
                  name={country.name}
                  flag={country.flag}
                  continent={country.continent}
                  capital={country.capital}
                  population={country.population}
                />
               </Link>
              </div> 
          );
        })}
      </div> 
    </div>
  )
}