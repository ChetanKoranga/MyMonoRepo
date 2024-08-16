import { takeLatest } from "redux-saga/effects";
import { loggedIn } from "../../slices/userSlice/userSlice";

function* user() {}
export function* watchUser() {
  yield takeLatest(loggedIn.type, user);
}
