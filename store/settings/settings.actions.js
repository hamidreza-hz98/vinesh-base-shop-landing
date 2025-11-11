import { modifySettingsApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSettings = createAsyncThunk(
  "settings/getSettings",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(modifySettingsApi);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
