import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useAppDispatch } from "./hooks/appHooks";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { fetchProducts } from "./redux/reducers/productReducer";
import { RootState } from "./redux/reducers/store";

function App() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.productReducer);
  useEffect(() => {
    dispatch(fetchProducts({ offset: 0, limit: 30 }));
  }, []);
  console.log(products);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
