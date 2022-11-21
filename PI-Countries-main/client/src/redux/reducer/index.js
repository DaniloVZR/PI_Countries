import { RESET, ORDER_BY_POPULATION, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITIES, DETAIL, HIGHER_POPULATION } from '../../const/Const'

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
      const filteredCont = action.payload === 'All' ? filterByContinent : filterByContinent.filter(e = e.continent === action.payload)
      return {
        ...state,
        countries: filteredCont
      }

    case FILTER_BY_ACTIVITIES:
      const filterByActivities = state.allCountries
      const filteredAct = filterByActivities.filter((c) => {
        return c.activities.find((c) => {
          return c.name === action.payload;
        })
      });

      if (action.payload === 'todos') {
        return {
          ...state, 
          countries: filteredAct
        }
      }

    case POST_ACTIVITIES:
      return {
        ...state
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    
    case DETAIL:
      return {
        ...state,
        detail: action.payload
      }

    case RESET:
      return {
        ...state,
        detail: []
      }

    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }

    case ORDER_BY_NAME:
      let orderCountriesByName = action.payload === ASC ? state.countries.sort((a, b) => {
        if (a.name < b.name) {
          return -1;    
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }) :
        state.countries.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        })

      return {
        ...state,
        countries: orderCountriesByName
      }

    case ORDER_BY_POPULATION:
      let orderCountriesByPopulation = action.payload === HIGHER_POPULATION ? state.countries.sort((a, b) => {
        if (a.population < b.population) {
          return 1
        }
        if (a.population > b.population) {
          return -1
        }
      }) : 
        state.countries.sort((a, b) => {
          if (a.population < b.population) {
            return -1
          }
          if (a.population > b.population) {
            return 1
          }
          return 0 
        })
      
        return {
          ...state,
          countries: orderCountriesByPopulation
        }

    default:
      return state
  }
}

