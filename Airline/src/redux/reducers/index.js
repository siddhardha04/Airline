import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import loginReducer from "./loginReducer";
import passengerReducer from "./passengerReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  flights: flightReducer,
  passengers: passengerReducer
});

export default rootReducer;
