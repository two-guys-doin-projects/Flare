import { configureStore } from '@reduxjs/toolkit'
import modelListReducer from '../state/ModelListSlice'
import  datasetReducer  from '../state/DatasetSlice'

export default configureStore({
  reducer: {
    models: modelListReducer,
    dataset: datasetReducer,
  },
})