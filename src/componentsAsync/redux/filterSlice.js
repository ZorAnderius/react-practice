import { createSlice } from "@reduxjs/toolkit";
import { filterStatus } from "../helpers/filterStatus";

const filterInitialValue = {
  status: filterStatus.all,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialValue,
  reducers: {
    chnageFilterStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { chnageFilterStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
