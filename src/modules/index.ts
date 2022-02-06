import counter, { decreaseSaga, increaseSaga } from "./counter";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter
});

export function* rootSaga() {
  yield all([increaseSaga(), decreaseSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
