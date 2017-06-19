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

const combinedSaga = userSagas.concat(tweetSagas);
export default createRootSaga(combinedSaga);
