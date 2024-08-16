import { take, put, takeLatest, call, ForkEffect } from "redux-saga/effects";
import {
  authenticationService,
  sessionAccountService,
} from "../../../services";
import {
  checkSessionSuccess,
  logout,
  restoreSession,
  setCurrentUser,
} from "../../slices/sessionSlice/sessionSlice";
import { hideLoader } from "../../slices/commonSlice/commonSlice";

export function* currentTheme({
  theme,
}: {
  theme: string;
}): Generator<any, void, any> {
  try {
    yield theme;
  } catch (error) {
    Promise.reject(error);
  }
}

export function* logoutUser(): Generator<any, void, unknown> {
  yield take(logout.type);
  yield authenticationService.logout();
}

export function* loadCurrentUser(): Generator<any, void, unknown> {
  try {
    const userInfo = yield call(
      authenticationService.loadUserProfile.bind(authenticationService)
    );

    const currentUser = { userInfo };
    yield sessionAccountService.setCurrentUser(currentUser);
    yield put(setCurrentUser(currentUser));
  } catch (error) {
    Promise.reject(error);
  }
}

export function* restoreSessionSaga(): Generator<any, void, unknown> {
  yield take(restoreSession.type);
  yield put(restoreSession({ isAuthenticated: true }));
  yield call(loadCurrentUser);
  yield put(hideLoader());
  yield put(checkSessionSuccess({ hasCheckedSession: true }));
}

export function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(logout.type, logoutUser);
  yield takeLatest(restoreSession.type, restoreSessionSaga);
}

export default rootSaga;
