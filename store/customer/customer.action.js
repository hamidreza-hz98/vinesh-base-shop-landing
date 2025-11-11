import {
  createCustomerApi,
  getAllCustomersApi,
  modifyCustomerApi,
  customerDetailsApi,
} from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (body, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(createCustomerApi, {
        method: "POST",
        body,
      });

      return message;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async ({ _id, body }, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyCustomerApi(_id), {
        method: "PUT",
        body,
      });

      return message
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getAllCustomers = createAsyncThunk(
  "customer/getAllCustomers",
  async (query, { rejectWithValue }) => {
    try {
      const  { data }  = await fetchWithAuth(getAllCustomersApi(query));
      
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getCustomerDetails = createAsyncThunk(
  "customer/getCustomerDetails",
  async (query, { rejectWithValue }) => {
    
    try {
      const { data } = await fetchWithAuth(customerDetailsApi(query));

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (_id, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyCustomerApi(_id), {
        method: "DELETE",
      });

      return message;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
