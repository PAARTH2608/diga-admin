import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer }
});
export default store;











































































// import { createStore } from 'redux';

// const initialState = { showLanding: false };
// const hiddenReducer = (state = initialState, action) => {
//     if(action.type === 'toggle'){
//         return {
//             showLanding: !state.showLanding
//         }
//     }
//     if(action.type === 'logout'){
//         return {
//             showLanding: false
//         }
//     }
//     return state;
// }

// const store = createStore(hiddenReducer)