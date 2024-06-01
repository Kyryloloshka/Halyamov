import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LinksState {
  currentRoute: string;
}

const initialState: LinksState = {
  currentRoute: "",
};

const slice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setCurrentPageLabel(state, action: PayloadAction<string>) {
      state.currentRoute = action.payload;
    },
  }
})

export const {reducer: linksReducer, actions: linksActions } = slice;
