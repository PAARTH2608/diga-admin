import {all, fork} from 'redux-saga/effects';

// Sagas
// Import your sagas here!
// For eg:
import authSaga from './auth.saga';

// Connect types to sagas
const rootSaga = function* root() {
  console.log("hemlo")
  yield all([
    // Seperate the sagas by comma
    fork(authSaga),
  ]);
};

export default rootSaga;
