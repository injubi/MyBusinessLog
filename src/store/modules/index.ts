import { combineReducers } from "redux";
import day from "./day/day";
import log from "./log/log";

const rootReducer = combineReducers({ day, log });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
