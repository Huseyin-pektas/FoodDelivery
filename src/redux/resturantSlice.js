import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturant: null
}

const resturantSlice = createSlice({
    name: "resturant",
    initialState,
    reducers: {
        setResturant: (state, action) => {
            state.resturant = action.payload
        }
    }
})

export const { setResturant } = resturantSlice.actions

export const selectResturant = state => state.resturant.resturant
export default resturantSlice.reducer