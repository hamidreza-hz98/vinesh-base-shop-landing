const { createSlice } = require("@reduxjs/toolkit");
const { submitContact } = require("./contact.action");

const initialState = {
  loading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(submitContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitContact.rejected, (state) => {
        state.loading = false;
      }),
});

export default contactSlice.reducer;
