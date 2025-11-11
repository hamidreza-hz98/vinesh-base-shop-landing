const { createSlice } = require("@reduxjs/toolkit");
const {
  createCustomer,
  updateCustomer,
  getAllCustomers,
  getCustomerDetails,
  deleteCustomer,
} = require("./customer.action");

const initialState = {
  loading: false,
  customers: [],
  customer: {},
};

const customerSlice = createSlice({
  name: "customer",

  initialState,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(createCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCustomer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createCustomer.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateCustomer.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(getAllCustomers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCustomerDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload;
      })
      .addCase(getCustomerDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteCustomer.rejected, (state) => {
        state.loading = false;
      }),
});

export default customerSlice.reducer