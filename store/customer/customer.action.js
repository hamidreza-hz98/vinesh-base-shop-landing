import { loginApi, signupApi } from "@/constants/api.routes";
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
