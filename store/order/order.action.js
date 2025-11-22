import {
  customerOrderDetailsApi,
  customerOrdersApi,
  orderApi,
} from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";
import nookies from "nookies";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (body, { rejectWithValue }) => {
    try {
      const { message, data } = await fetchWithAuth(orderApi, {
        method: "POST",
        body,
      });

      nookies.destroy(null, "cart", { path: "/" });

      return { message, order: data };
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const getCustomerOrders = createAsyncThunk(
  "order/getCustomerOrders",
  async ({ _id, query }, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(customerOrdersApi({_id, query}));

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const getCustomerOrderDetails = createAsyncThunk(
  "order/getCustomerOrderDetails",
  async ({ code, customer }, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(
        customerOrderDetailsApi(code, customer)
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);
