// reducers/index.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalStylesSlice from '../slices/globalStylesSlice'
import layoutSlice from '../slices/layoutSlice'
import subjectSlice from '../slices/subjectSlice'

const rootReducer = combineReducers({
  subject: subjectSlice,
  globalStyles: globalStylesSlice,
  layout: layoutSlice
})

export const store = configureStore({
  reducer: rootReducer
})
