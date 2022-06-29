import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";

export const store = configureStore({
  reducer: { userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

