import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../types/catTypes";
import { IUser } from "../types/userTypes";
import axios from "axios";
export const getCats = createAsyncThunk<ICat[], void, { rejectValue: string }>(
  "user/getCats",
  async () => {
    const request = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=12`
    );
    const answer: ICat[] = [];
    request.data.map((cat: ICat) => answer.push({ id: cat.id, url: cat.url }));
    return answer;
  }
);
export const getFavCatImg = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("user/getFavCatImg", async (id) => {
  const request = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
  return request.data.url;
});

const initialState: IUser = {
  allCats: [],
  favCats: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCatToFav: (state: IUser, action: PayloadAction<ICat>) => {
      state.favCats.push(action.payload);
      localStorage.setItem("favCats", `${JSON.stringify(state.favCats)}`);
    },
    removeCatFromFav: (state: IUser, action: PayloadAction<string>) => {
      state.favCats = state.favCats.filter((cat) => cat.id !== action.payload);
      localStorage.setItem("favCats", `${JSON.stringify(state.favCats)}`);
    },
    getCatsFromLocalStorage: (state: IUser) => {
      if (localStorage.getItem("favCats")) {
        state.favCats = JSON.parse(`${localStorage.getItem("favCats")}`);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCats.fulfilled, (state, action) => {
      action.payload.map((cat) => state.allCats.push(cat));
    });
    builder.addCase(getCats.rejected, () => {
      console.log("server error");
    });
  },
});
export const { addCatToFav, removeCatFromFav, getCatsFromLocalStorage } =
  userSlice.actions;
export default userSlice.reducer;
