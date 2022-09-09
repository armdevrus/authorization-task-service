import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: 'Arman',
    password: 'frontend',
    isEnter: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleEnter: (state, action) => {
            state.isEnter = action.payload
        }
    },
})

export const userReducer = userSlice.reducer
export const {toggleEnter} = userSlice.actions