import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsParams, Product } from "../../types/product";

const initialState: Product[] = [];
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ offset, limit }: fetchProductsParams) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      const result = await data.json();
      return result;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "deleteProduct",
  async (productId: string) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        { method: "DELETE" }
      );
      const result = await data.json();
      return productId;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.filter((product) => {
        if (product.id === action.payload.id) {
          product = {
            ...product,
            ...action.payload.update,
          };
          return product;
        }
      });
    },
  }, // collections of all synchronous methods
  extraReducers: (build) => {
    build.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        return action.payload.sort((a, b) => {
          return a.price - b.price;
        });
      }
    );
    build.addCase(
      deleteProductAsync.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        return state.filter((product) => product.id !== action.payload);
      }
    );
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct, updateProduct } = productSlice.actions;
