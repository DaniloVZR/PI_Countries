import axios from "axios";
import {
  RESET,
  ORDER_BY_POPULATION,
  FILTER_BY_ACTIVITIES,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  ORDER_BY_NAME,
  SEARCH_COUNTRIES,
  GET_ACTIVITIES,
  POST_ACTIVITIES,
  DETAIL,
} from "../../const/Const";

export function getCountries() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_COUNTRIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountries(search) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/countries?name=" + search
      );
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: json.data,
      });
    } catch (error) {
      alert("Country not found");
    }
  };
}

export function filterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function filterByActivity(payload) {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/activity");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: json.data,
      });
    } catch (error) {
      alert("There is not activities");
      console.log(error);
    }
  };
}

export function postActivities(payload) {
  return async function (dispatch) {
    await axios.post("http://localhost:3001/activity", payload);
    return dispatch({
      type: POST_ACTIVITIES,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/countries/" + id);
      return dispatch({
        type: DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function restartDetail() {
  return (dispatch) => {
    dispatch({
      type: RESET,
    });
  };
}
