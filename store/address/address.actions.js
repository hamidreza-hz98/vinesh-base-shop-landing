import { addressApi, modifyAddressApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAddress = createAsyncThunk(
  "address/createAddress",
  async (body, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(addressApi, {
        method: "POST",
        body,
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ _id, body }, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyAddressApi(_id), {
        method: "PUT",
        body,
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCustomerAddresses = createAsyncThunk(
  "address/getCustomerAddresses",
  async (customerId, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(modifyAddressApi(customerId));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (_id, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyAddressApi(_id), {
        method: "DELETE",
      });

      return message
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
