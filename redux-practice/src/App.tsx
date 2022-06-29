import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers, deleteUser } from "./app/reducer/userReducer";
import { useAppDispatch } from "./app/hooks";
import { RootState } from "./app/store";
import { userReducer } from "./app/reducer/userReducer";
import { User } from "./app/types/Users";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const userList = useSelector(
    (state: RootState) => state.userReducer.userList
  );
  console.log("userList", userList);
  const [username, setUsername] = useState<String>("");
  const [userId, setUserId] = useState<Number>(0);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <div>
        <label>Enter new user: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => dispatch(addUser(username))}>Save User</button>
      </div>
      <br></br>
      <div>
        <label>Enter user ID: </label>
        <input
          type="text"
          name="user_id"
          id="user_id"
          onChange={(e) => setUserId(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(deleteUser(userId))}>
          Delete User
        </button>
      </div>
      {userList.length > 0 &&
        userList.map((user) => {
          return (
            <p>
              ID: {user.id} Username: {user.login}
            </p>
          );
        })}
    </div>
  );
}

export default App;
