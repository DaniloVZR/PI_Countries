import { RESET, ORDER_BY_POPULATION, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITIES, DETAIL } from '../../const/Const'
import { filterByActivity } from '../actions'

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      }

    case FILTER_BY_CONTINENT:
      const filterByContinent = state.allCountries
      const continentFilter = action.payload === 'All' ? filterByContinent : filterByContinent.filter(e = e.continent === action.payload)
      return {
        ...state,
        countries: continentFilter
      }
  }
}