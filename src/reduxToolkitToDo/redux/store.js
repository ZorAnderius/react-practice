import { taskReducer } from "./tasksSlice";
import { filtersReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});
