import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentPerson: 0
}

const currentPersonSlice = createSlice({
    name: "currentPerson",
    initialState,
    reducers: {
        setCurrentPerson: (state, action) => {
            state.currentPerson = action.payload
        }
    }
})

export const { setCurrentPerson } = currentPersonSlice.actions

export default currentPersonSlice.reducer