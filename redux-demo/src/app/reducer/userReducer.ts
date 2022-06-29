import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { User } from "../../types/users";

const initialState: { userList: User[] } = {
  userList: [],
};

export const fetchUsers = createAsyncThunk("fetchUser", async () => {
  const data = await fetch("https://api.github.com/users");
  const result = await data.json();
  return result;
});

const userSlicer = createSlice({
  name: "userReducer",
  initialState: initialState,
  reducers: {}, //for synchronous only
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload.data;
    });
  }, // for async functions
});

export const userReducer = userSlicer.reducer;
