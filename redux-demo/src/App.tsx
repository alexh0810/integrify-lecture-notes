import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { fetchUsers } from "./app/reducer/userReducer";
import { useAppDispatch } from "./app/hooks";
import { RootState } from "./app/store";
import { userReducer } from "./app/reducer/userReducer";

function App() {
  const dispatch = useAppDispatch();
  const userList = useSelector((state: RootState) => state.userReducer.userList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">{userList.length > 0 && <p>{userList.length}</p>}</div>
  );
}

export default App;
