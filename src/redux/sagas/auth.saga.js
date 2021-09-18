import {put, call, takeLatest, all} from 'redux-saga/effects';
import {AuthService} from '../../services';

import {AuthTypes} from '../types';
const authService = new AuthService() 
export function* login(cred) {
  console.log("hello")
  try {
    const user = yield call(authService.login, cred.payload);
    // console.log('hm', user);
    if (user.error) {
      yield put({type: AuthTypes.LOGIN_ERROR, error: user.message});
    } else {
      yield put({type: AuthTypes.LOGIN_SUCCESS, data: user});
    }
  } catch (error) {
    yield put({type: AuthTypes.LOGIN_ERROR, error});
  }
}
export function* getBookings(token) {
  // console.log("hello token", token)
  try {
    const bookings = yield call(authService.getBookings, token.payload);
    // console.log('hmmm', bookings);
    if (bookings.error) {
      yield put({type: AuthTypes.BOOKINGS_ERROR, error: bookings.message});
    } else {
      yield put({type: AuthTypes.BOOKINGS_SUCCESS, data: bookings});
      
    }
  } catch (error) {
    yield put({type: AuthTypes.BOOKINGS_ERROR, error});
  }
}


export default function* authSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.BOOKINGS_REQUEST, getBookings),
  ]);
}
