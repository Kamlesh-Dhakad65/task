import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/records';

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addRecord = createAsyncThunk('records/addRecord', async (record) => {
  const response = await axios.post(API_URL, record);
  return response.data;
});

export const updateRecord = createAsyncThunk('records/updateRecord', async ({ id, data }) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
});

export const deleteRecord = createAsyncThunk('records/deleteRecord', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const recordSlice = createSlice({
  name: 'records',
  initialState: { records: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecords.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = false;
      })
      .addCase(addRecord.fulfilled, (state, action) => {
        state.records.push(action.payload);
      })
      .addCase(updateRecord.fulfilled, (state, action) => {
        const index = state.records.findIndex((r) => r._id === action.payload._id);
        state.records[index] = action.payload;
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.records = state.records.filter((r) => r._id !== action.payload);
      });
  },
});

export default recordSlice.reducer;
