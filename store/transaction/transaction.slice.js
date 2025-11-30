import { createPaymentGateway, retryPayment } from "./transaction.action";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(createPaymentGateway.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPaymentGateway.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createPaymentGateway.rejected, (state) => {
        state.loading = false;
      })
      .addCase(retryPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(retryPayment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(retryPayment.rejected, (state) => {
        state.loading = false;
      }),
});

export default transactionSlice.reducer;
