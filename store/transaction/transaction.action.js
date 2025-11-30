import {
  initiateTransactionApi,
  retryTransactionApi,
} from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPaymentGateway = createAsyncThunk(
  "transaction/createPaymentGateway",
  async (body, { rejectWithValue }) => {
    try {
      const res = await fetchWithAuth(initiateTransactionApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body,
      });

      if (res.redirectUrl) {
        window.location.href = res.redirectUrl;
      } else {
        alert("Could not initiate payment: " + (res.error || "unknown"));
      }
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی در درگاه پرداخت پیش آمد.");
    }
  }
);

export const retryPayment = createAsyncThunk(
  "transaction/retryPayment",
  async (body, { rejectWithValue }) => {
    try {
      const res = await fetchWithAuth(retryTransactionApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body,
      });

      if (res.redirectUrl) {
        window.location.href = res.redirectUrl;
      } else {
        alert("Could not initiate payment: " + (res.error || "unknown"));
      }
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی در درگاه پرداخت پیش آمد.");
    }
  }
);
