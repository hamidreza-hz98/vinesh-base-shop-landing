import { contactApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitContact = createAsyncThunk(
  "contact/submitContact",
  async (body, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(contactApi, {
        method: "POST",
        body,
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
