const { createSlice } = require("@reduxjs/toolkit");
const {
  createAddress,
  updateAddress,
  getCustomerAddresses,
  deleteAddress,
} = require("./address.actions");

const initialState = {
  loading: false,
  addresses: [],
};

const addressSlice = createSlice({
  name: "address",
  initialState,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAddress.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createAddress.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateAddress.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCustomerAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomerAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(getCustomerAddresses.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.loading = false;
      }),
});

export default addressSlice.reducer;
