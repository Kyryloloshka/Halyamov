import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LinksState {
  currentRoute: string;
  currentHref: string;
}

const initialState: LinksState = {
  currentRoute: "",
  currentHref: "",
};

const slice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setCurrentPageLabel(state, action: PayloadAction<string>) {
      state.currentRoute = action.payload;
    },
    setCurrentHref(state, action: PayloadAction<string>) {
      state.currentHref = action.payload;
    },
  }
})

export const {reducer: linksReducer, actions: linksActions } = slice;
