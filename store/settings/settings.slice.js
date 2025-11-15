const { createSlice } = require("@reduxjs/toolkit");
const { getSettings, updateSettings } = require("./settings.actions");

const initialState = {
  loading: false,
  settings: {
    general: {}
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSettings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(getSettings.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default settingsSlice.reducer;
