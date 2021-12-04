import { combineReducers } from "redux";

import appList from "./container/appList/reducer";
import login from "./container/login/reducer";

const rootReducer = combineReducers({ login, appList });

export default rootReducer;
