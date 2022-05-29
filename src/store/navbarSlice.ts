import { createSlice } from "@reduxjs/toolkit";
import { INavbar } from "../types/navbarTypes";

const initialState: INavbar = {
  drawerIsOpen: false,
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleDrawer: (state: INavbar) => {
      state.drawerIsOpen = !state.drawerIsOpen;
    },
  },
});

export const { toggleDrawer } = navbarSlice.actions;

export default navbarSlice.reducer;
