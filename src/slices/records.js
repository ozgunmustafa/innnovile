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
      const filteredRecords = current(state.data).filter(
        (record) => record.id !== recordId,
      );
      state.data = filteredRecords;
    },

    createRecord: (state, action) => {
      const getLastRecord = current(state.data[state.data.length - 1]);
      const data = { ...action.payload, id: +getLastRecord.id + 1 };
      state.data.push(data);
    },
  },
});

export const { setSelectedRecord, createRecord, removeRecord } =
  recordSlice.actions;

export default recordSlice.reducer;
