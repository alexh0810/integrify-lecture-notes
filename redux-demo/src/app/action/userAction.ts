import React, { Dispatch } from "react";
import { User } from "../../types/users";

export const SAVE_USER = "SAVE_USER";

export const fetchUsers = (): any => {
  return async (dispatch: any) => {
    return await fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((result) => dispatch(saveUsers(result)));
  };
};

export const saveUsers = (userList: User[]) => {
  return {
    type: SAVE_USER,
    payload: { userList }, //destructure userList
  };
};
