import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  MediaType: "ALL",
};
const MediaTypeSlice = createSlice({
  name: "MediaType",
  initialState,
  reducers: {
    ChangeMediaType: (state, newMediaType) => {
      // this is the action
      state.MediaType = newMediaType.payload;
    },
  },
});
export const { ChangeMediaType } = MediaTypeSlice.actions; // to be used inside our component
export default MediaTypeSlice.reducer;
