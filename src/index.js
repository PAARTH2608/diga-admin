import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux';
// import store from './store/index';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import Layout from './components/layout/Layout'
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

document.title = 'Diga Admin Panel'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();
