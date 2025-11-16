import {
  cartApi,
  getCartApi,
  getCustomerCartApi,
  modifyCartApi,
} from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie } from "nookies";

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(getCartApi(_id));

      setCookie(null, "cart", data._id, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCustomerCart = createAsyncThunk(
  "cart/getCustomerCart",
  async (customerId, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(getCustomerCartApi(customerId));

      setCookie(null, "cart", data._id, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createCart = createAsyncThunk(
  "cart/create",
  async (body = null, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(cartApi, {
        method: "POST",
        body,
      });

      setCookie(null, "cart", data._id, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ _id, options }, { rejectWithValue }) => {
    try {
      const { data, message } = await fetchWithAuth(modifyCartApi(_id), {
        method: "POST",
        body: options,
      });

      return {message, data};
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد." );
    }
  }
);
