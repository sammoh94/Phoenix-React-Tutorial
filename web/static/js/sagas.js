import { fork } from "redux-saga/lib/effects";

import userSagas  from "./users/sagas";
import tweetSagas from "./tweets/sagas";

function createRootSaga(sagas) {
  return function* rootSaga() {
    for (const saga of sagas) {
      yield fork(saga);
    }
  };
}

export default createRootSaga([userSagas, tweetSagas]);
