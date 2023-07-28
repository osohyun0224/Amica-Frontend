import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    },
  },
})

export const { setName, setAge } = userSlice.actions

export default userSlice.reducer
