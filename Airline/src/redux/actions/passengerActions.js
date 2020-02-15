import * as types from "./actionTypes";
import axios from "axios";

export function loadPassengersSuccess(passengers) {
  return { type: types.LOAD_PASSENGERS_SUCCESS, passengers };
}

export function loadPassengers(flightId) {
  return function(dispatch) {
    return axios
      .get("http://localhost:3001/passengersList/?flightId=" + flightId)
      .then(resp => {
        dispatch(loadPassengersSuccess(resp.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addPassenger(newPassenger) {
  return function(dispatch) {
    axios
      .post("http://localhost:3001/passengersList", newPassenger)
      .then(resp => {
        dispatch(loadPassengers(resp.data.flightId));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updatePassenger(updatedPassenger) {
  return function(dispatch) {
    axios
      .put(
        "http://localhost:3001/passengersList/" + updatedPassenger.id,
        updatedPassenger
      )
      .then(resp => {
        dispatch(loadPassengers(resp.data.flightId));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function checkinPassenger(checkedInPassenger) {
  return function(dispatch) {
    axios
      .put(
        "http://localhost:3001/passengersList/" + checkedInPassenger.id,
        checkedInPassenger
      )
      .then(resp => {
        dispatch(loadPassengers(resp.data.flightId));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function uncheckPassenger(uncheckedPassenger) {
  return function(dispatch) {
    axios
      .put(
        "http://localhost:3001/passengersList/" + uncheckedPassenger.id,
        uncheckedPassenger
      )
      .then(resp => {
        dispatch(loadPassengers(resp.data.flightId));
      })
      .catch(error => {
        throw error;
      });
  };
}
