import { configureStore } from "@reduxjs/toolkit";
import MediaType from "./slices/MediaType";
// create redux store
// create reducer
const store = configureStore({
  reducer: {
    MediaTypeReducer: MediaType,
  },
});
export default store;
