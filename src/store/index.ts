import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    navbar: navbarSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
