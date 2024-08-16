import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

export default function store() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = (getDefaultMiddleware: any) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: false, // Disable thunk middleware
      serializableCheck: false, // Disable serializable check as it's deprecated
      immutableCheck: false, // Disable immutable check as it's deprecated
      actionCreatorCheck: false, // Disable action creator check as it's deprecated
    });
    return [...defaultMiddleware, logger, sagaMiddleware];
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
