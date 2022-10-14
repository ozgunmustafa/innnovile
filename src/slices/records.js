import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import records from '../data/Autocorrection.json';

const initialState = {
  data: records,
  message: '',
  loading: false,
  selectedRecord: {},
};

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    setSelectedRecord: (state, action) => {
      const recordId = action.payload;

      const getRecord = current(state.data).filter(
        (record) => record.id === recordId,
      );
      state.selectedRecord = getRecord[0];
    },

    removeRecord: (state, action) => {
      const recordId = action.payload;
      console.log(current.state.data.find());
    },

    createRecord: (state, action) => {
      const getLastRecord = current(state.data[state.data.length - 1]);
      const data = { ...action.payload, id: +getLastRecord.id + 1 };
      console.log('act.payload', data);
      current(state.data.push(data));

      console.log('last state', current(state.data));
    },
  },
});

export const { setSelectedRecord, createRecord } = recordSlice.actions;

export default recordSlice.reducer;
