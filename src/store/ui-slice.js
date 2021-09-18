import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { showLanding: false },
    reducers: {
        toggle(state){
            state.showLanding =  !state.showLanding
        },
        logout(state){
            state.showLanding =  false
        }
    }
});
export const uiActions = uiSlice.actions;
export default uiSlice;