import { generateLayout } from '@/config/layout'
import { createSlice } from '@reduxjs/toolkit'

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    layout: generateLayout()
  },
  reducers: {
    randomizeLayout: state => {
      state.layout = generateLayout()
    }
  }
})

export const { randomizeLayout } = layoutSlice.actions

export default layoutSlice.reducer
