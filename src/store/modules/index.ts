import { combineReducers } from "redux";
import day from "./day";

const rootReducer = combineReducers({ day });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
