/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */

import { URLS } from "constants/apiUrls";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_APP_LIST, getAppListFullfilled, getAppListPending, getAppListRejected,
} from "store/container/appList/actions";
import api from "utils/api";

/**
 * worker saga
 */
const { get } = api;
const { USER_APP } = URLS;
export function* getAppListWorker():any {
  try {
    yield put(getAppListPending());
    const response = yield call(get, USER_APP);
    yield put(getAppListFullfilled(response.data));
  } catch (e) {
    yield put(getAppListRejected((e as Error).message));
  }
}

/**
 * watcher saga
 */
export default function* getAppListWatcher() {
  yield takeEvery(GET_APP_LIST, getAppListWorker);
}
