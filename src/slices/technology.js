
import { createSlice } from '@reduxjs/toolkit'
import technologies from '../data/Technology.json'

const initialState = {
  data: technologies,
  message: '',
  loading:false,
}

const technologySlice = createSlice({
  name: 'technologies',
  initialState,
  reducers:{}

})

export default technologySlice.reducer;
