import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTechnology: 0
}

const currentTechnologySlice = createSlice({
    name: "currentTechnology",
    initialState,
    reducers: {
        setCurrentTechnology: (state, action) => {
            state.currentTechnology = action.payload
        }
    }
})


export const { setCurrentTechnology } = currentTechnologySlice.actions

export default currentTechnologySlice.reducer
