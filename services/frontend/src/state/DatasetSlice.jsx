import { createSlice } from "@reduxjs/toolkit";

export const datasetSlice = createSlice({
    name: "dataset",
    initialState: {
        name: "",
        value: [],
        columns: [],
    },
    reducers:{
        setname: (state, actions) => {
            state.name = actions.payload
        },
        setdatasetdata: (state, actions) => {
            state.value = actions.payload
        },
        setdatasetcolumns: (state, actions) => {
            state.columns = actions.payload
        },
    }
})

export const { setname, setdatasetdata, setdatasetcolumns } = datasetSlice.actions

export default datasetSlice.reducer