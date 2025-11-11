import {
  createProductApi,
  getAllProductsApi,
  modifyProductApi,
  productDetailsApi,
} from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (body, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(createProductApi, {
        method: "POST",
        body,
      });

      return message;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",

  async ({ _id, body }, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyProductApi(_id), {
        method: "PUT",
        body,
      });

      return message;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(getAllProductsApi(query));

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(productDetailsApi(query));

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (_id, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyProductApi(_id), {
        method: "DELETE",
      });

      return message;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
