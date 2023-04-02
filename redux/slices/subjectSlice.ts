import { subjectOptions } from '@/config/subjects'
import { getRandomItem } from '@/utils/general'
import { createSlice } from '@reduxjs/toolkit'

const getRandomSubject = () => {
  return getRandomItem(subjectOptions)
}

const subjectSlice = createSlice({
  name: 'subject',
  initialState: { subject: getRandomSubject() },
  reducers: {
    randomizeSubject: state => {
      state.subject = getRandomSubject()
    },
    selectSubject: (state, action) => {
      const { subj } = action.payload

      state.subject = subjectOptions.find(subject => subject === subj)
    }
  }
})

export const { randomizeSubject, selectSubject } = subjectSlice.actions

export default subjectSlice.reducer
