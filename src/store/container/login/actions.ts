/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const GET_LOGIN = "GET_LOGIN";
export const GET_LOGIN_PENDING = "GET_LOGIN_PENDING";
export const GET_LOGIN_FULLFILLED = "GET_LOGIN_FULLFILLED";
export const GET_LOGIN_REJECTED = "GET_LOGIN_REJECTED";

export const getLogin = (data: any):any => ({
  type: GET_LOGIN,
  data,
});
export const getLoginPending = ():any => ({
  type: GET_LOGIN_PENDING,
});

export const getLoginFullfilled = (data:any):any => ({
  type: GET_LOGIN_FULLFILLED,
  data,
});

export const getLoginRejected = (error:any) => ({
  type: GET_LOGIN_REJECTED,
  error,
});
