import { all, spawn } from "redux-saga/effects";
import { watchUser } from "./user/user";
import { restoreSessionSaga } from "./session/session";

export function* rootSaga() {
  yield all([spawn(restoreSessionSaga), spawn(watchUser)]);
}
