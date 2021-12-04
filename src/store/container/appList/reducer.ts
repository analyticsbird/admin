/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  GET_APP_LIST_FULLFILLED,
  GET_APP_LIST_PENDING,
  GET_APP_LIST_REJECTED,
} from "store/container/appList/actions";

const login = (state = { pending: false, apiData: {}, error: null }, action:any) => {
  switch (action.type) {
    case GET_APP_LIST_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_APP_LIST_FULLFILLED:
      return {
        ...state,
        pending: false,
        apiData: action.data,
      };
    case GET_APP_LIST_REJECTED:
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
