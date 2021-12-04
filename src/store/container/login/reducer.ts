/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  GET_LOGIN_FULLFILLED,
  GET_LOGIN_PENDING,
  GET_LOGIN_REJECTED,
} from "store/container/login/actions";

const login = (state = { pending: false, data: {}, error: null }, action:any) => {
  switch (action.type) {
    case GET_LOGIN_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_LOGIN_FULLFILLED:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_LOGIN_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default login;
