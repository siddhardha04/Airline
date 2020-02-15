import * as types from "../actions/actionTypes";

export default function flightReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLIGHTS_SUCCESS:
      return action.flights;
    default:
      return state;
  }
}
