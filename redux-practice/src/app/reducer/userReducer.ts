import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Console } from "console";
import { User } from "../types/Users";

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
  reducers: {
    addUser: (state, action) => {
      state.userList.push({
        login: action.payload,
        id: Math.floor(Math.random() * 100),
      });
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      state.userList = state.userList.filter(
        (user) => user.id != action.payload
      );
    },
  }, //for synchronous only
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log("payload", action.payload);
      state.userList = action.payload;
    });
  }, // for async functions
});

export const userReducer = userSlicer.reducer;
export const { addUser, deleteUser } = userSlicer.actions;
