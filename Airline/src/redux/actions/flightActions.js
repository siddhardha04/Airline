import * as types from "./actionTypes";

export function loadFlightsSuccess(flights) {
  return { type: types.LOAD_FLIGHTS_SUCCESS, flights };
}

export function loadFlights() {
  return function(dispatch) {
    return fetch("http://localhost:3001/flights")
      .then(resp => resp.json())
      .then(flights => {
        dispatch(loadFlightsSuccess(flights));
      })
      .catch(error => {
        throw error;
      });
  };
}
