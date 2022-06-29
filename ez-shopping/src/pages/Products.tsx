import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import {
  deleteProductAsync,
  fetchProducts,
} from "../redux/reducers/productReducer";

const Products = () => {
  const products = useAppSelector((state) => state.productReducer);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(30);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onDelete = (id: string) => {
    dispatch(deleteProductAsync(id));
  };
  const onChangePage = (input: "left" | "right") => {
    if (page > 0 && input === "left") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
    dispatch(fetchProducts({ offset: page, limit: perPage }));
  };

  return (
    <Box className="products__container">
      {products.map((product) => (
        <div key={product.id}>
          <img
            onClick={() => navigate(`${product.id}`)}
            className="products__container__image"
            src={product.images[0]}
            alt="product"
          />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      ))}
      <ChevronLeftIcon onClick={() => onChangePage("left")} />
      <input
        type="number"
        onChange={(e) => setPerPage(Number(e.target.value))}
      />
      <ChevronRightIcon onClick={() => onChangePage("right")} />
    </Box>
  );
};

export default Products;
