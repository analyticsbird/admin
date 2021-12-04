/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const GET_APP_LIST = "GET_APP_LIST";
export const GET_APP_LIST_PENDING = "GET_APP_LIST_PENDING";
export const GET_APP_LIST_FULLFILLED = "GET_APP_LIST_FULLFILLED";
export const GET_APP_LIST_REJECTED = "GET_APP_LIST_REJECTED";

export const getAppList = ():any => ({
  type: GET_APP_LIST,
});
export const getAppListPending = ():any => ({
  type: GET_APP_LIST_PENDING,
});

export const getAppListFullfilled = (data:any):any => ({
  type: GET_APP_LIST_FULLFILLED,
  data,
});

export const getAppListRejected = (error:any) => ({
  type: GET_APP_LIST_REJECTED,
  error,
});
