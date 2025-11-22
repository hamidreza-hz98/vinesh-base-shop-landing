import { customerInfoApi, loginApi, signupApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie } from "nookies";

export const login = createAsyncThunk(
  "customer/login",
  async (body, { rejectWithValue }) => {
    try {
      const { data, message } = await fetchWithAuth(loginApi, {
        method: "POST",
        body,
      });

      const { token, customer } = data;

      setCookie(null, "token", token, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      setCookie(null, "customer", customer._id, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const signup = createAsyncThunk(
  "customer/signup",
  async (body, { rejectWithValue }) => {
    try {
      const { data, message } = await fetchWithAuth(signupApi, {
        method: "POST",
        body,
      });

      const { token, customer } = data;

      setCookie(null, "token", token, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      setCookie(null, "customer", customer._id, {
        maxAge: 365 * 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const getCustomerInformation = createAsyncThunk(
  "customer/getCustomerInformation",
  async (_id, { rejectWithValue }) => {
    try {
      const {data} = await fetchWithAuth(customerInfoApi(_id))

      return data
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
)

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async ({ _id, body }, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(customerInfoApi(_id), {
        method: "PUT",
        body,
      });

      return message
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);