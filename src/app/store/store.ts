import { configureStore } from "@reduxjs/toolkit";
import staff from "./slices/staff/staff";

export const store = configureStore({
  reducer: {
    staff,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
