import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducer/userReducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: userReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
