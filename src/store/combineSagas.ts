import { all, fork } from "redux-saga/effects";

import appList from "./container/appList/saga";
import login from "./container/login/saga";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* root() {
  yield all([
    fork(login),
    fork(appList),
  ]);
}
