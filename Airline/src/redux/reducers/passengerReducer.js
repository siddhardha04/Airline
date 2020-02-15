import * as types from "../actions/actionTypes";

export default function passengerReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PASSENGERS_SUCCESS:
      return action.passengers;
    default:
      return state;
  }
}
