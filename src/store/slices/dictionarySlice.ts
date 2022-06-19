import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dictionaryService from "../services/dictionary.service";
import { DictionaryResult, RequestStatus } from "types";
import { useTypedSelector } from "store";

export const getEntries = createAsyncThunk(
  "dictionary/getEntries",
  async (word: string) => {
    return await dictionaryService.getDictionaryEntry(word);
  }
);

interface DictionaryState {
  entries: DictionaryResult[];
  status: RequestStatus;
}

const initialState = {
  entries: [],
  status: RequestStatus.idle,
} as DictionaryState;

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntries.pending, (state, action) => {
      state.status = RequestStatus.pending;
    });
    builder.addCase(getEntries.fulfilled, (state, action) => {
      state.entries = action.payload;
      state.status = RequestStatus.fulfilled;
    });
    builder.addCase(getEntries.rejected, (state, action) => {
      state.status = RequestStatus.rejected;
    });
  },
});

export const useDictionarySelector = () => {
  const status = useTypedSelector((state) => state.dictionary.status);
  const data = useTypedSelector((state) => state.dictionary.entries);
  return { status, data };
};
