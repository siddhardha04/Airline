import * as types from "../actions/actionTypes";

const initialState = {
  userName: "",
  isSignedIn: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        userName: action.user.userName,
        isSignedIn: action.user.isSignedIn
      };
    case types.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
