import {combineReducers} from 'redux';

import AuthReducer from './auth.reducer';
import BookingsReducer from './fetchBookings.reducer';
import FilterReducer from './filter.reducer'

const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  bookings: BookingsReducer,
  filters: FilterReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
