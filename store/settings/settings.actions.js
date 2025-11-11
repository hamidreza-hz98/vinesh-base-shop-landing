import { getSettingsApi, modifySettingsApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSettings = createAsyncThunk(
  "settings/getSettings",
  async (section, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(getSettingsApi(section));

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateSettings = createAsyncThunk(
  "settings/updateSettings",
  async ({body, section}, { rejectWithValue }) => {
    try {
      const response = await fetchWithAuth(getSettingsApi(section), {
        method: "PUT",
        body,
      });

      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
