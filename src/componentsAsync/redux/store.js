import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./taskSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "tasks",
  storage,
};

const persistTaskReducer = persistReducer(persistConfig, tasksReducer)

export const store = configureStore({
  reducer: {
    tasks: persistTaskReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
