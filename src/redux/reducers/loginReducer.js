import React from "react";

const initialState = {};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return (state = action.payload);
    case "LOGOUT_USER":
      return (state = initialState);
    default:
      return state;
  }
}

export default loginReducer;
