import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    isOpen: false,
}    


const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState: intialState,
    reducers: {
        toggleHamburger: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});


export const { toggleHamburger } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;