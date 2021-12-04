/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */

import { URLS } from "constants/apiUrls";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_LOGIN, getLoginFullfilled, getLoginPending, getLoginRejected,
} from "store/container/login/actions";
import api from "utils/api";

/**
 * worker saga
 */
const { post } = api;
const { LOGIN } = URLS;
export function* getLoginWorker(action:any):any {
  try {
    yield put(getLoginPending());
    const response = yield call(post, LOGIN, action.data);
    yield put(getLoginFullfilled(response.data));
    localStorage.setItem("token", response.data.Authorization);
    window.location.href = "/";
  } catch (e) {
    yield put(getLoginRejected((e as Error).message));
  }
}

/**
 * watcher saga
 */
export default function* getLoginWatcher() {
  yield takeEvery(GET_LOGIN, getLoginWorker);
}
