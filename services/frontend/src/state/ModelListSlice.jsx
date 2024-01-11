import { createSlice } from "@reduxjs/toolkit";

export const modelListSlice = createSlice({
    name: "models",
    initialState: {
        value: [],
        name: "",
    },
    reducers:{
        newmodels: (state, actions) => {
            state.value = actions.payload
        },
        selectedmodel: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { newmodels, selectedmodel } = modelListSlice.actions

export default modelListSlice.reducer