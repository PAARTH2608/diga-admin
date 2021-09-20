import {put, call, takeLatest, all} from 'redux-saga/effects';
import {AuthService} from '../../services';

import {AuthTypes} from '../types';
const authService = new AuthService() 
export function* login(cred) {
  console.log("hello")
  try {
    const user = yield call(authService.login, cred.payload);
    console.log('hm', user);
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
  try {
    const bookings = yield call(authService.getBookings, token.payload);
    if (bookings.error) {
      yield put({type: AuthTypes.BOOKINGS_ERROR, error: bookings.message});
    } else {
      yield put({type: AuthTypes.BOOKINGS_SUCCESS, data: bookings});
      
    }
  } catch (error) {
    yield put({type: AuthTypes.BOOKINGS_ERROR, error});
  }
}

export function* getReports(token) {
  // console.log("hello token", token)
  try {
    const reports = yield call(authService.getReports, token.payload);
    // console.log('hmmm', bookings);
    if (reports.error) {
      yield put({type: AuthTypes.REPORTS_ERROR, error: reports.message});
    } else {
      yield put({type: AuthTypes.REPORTS_SUCCESS, data: reports});
      
    }
  } catch (error) {
    yield put({type: AuthTypes.REPORTS_ERROR, error});
  }
}

export function* reInstate(credentials) {
  // console.log("hello token", token)
  try {
    const message = yield call(authService.reInstate, credentials.payload);
    // console.log('hmmm', bookings);
    if (message.error) {
      yield put({type: AuthTypes.REINSTATE_ERROR, error: message.message});
    } else {
      yield put({type: AuthTypes.REINSTATE_SUCCESS, data: message});
      
    }
  } catch (error) {
    yield put({type: AuthTypes.REINSTATE_ERROR, error});
  }
}

export function* suspend(credentials) {
  // console.log("hello token", token)
  try {
    const message = yield call(authService.suspend, credentials.payload);
    // console.log('hmmm', bookings);
    if (message.error) {
      yield put({type: AuthTypes.SUSPEND_ERROR, error: message.message});
    } else {
      yield put({type: AuthTypes.SUSPEND_SUCCESS, data: message});
      
    }
  } catch (error) {
    yield put({type: AuthTypes.SUSPEND_ERROR, error});
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.BOOKINGS_REQUEST, getBookings),
    takeLatest(AuthTypes.REPORTS_REQUEST, getReports),
    takeLatest(AuthTypes.REINSTATE_REQUEST, reInstate),
    takeLatest(AuthTypes.SUSPEND_REQUEST, suspend),
  ]);
}
