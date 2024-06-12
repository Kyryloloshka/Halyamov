import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LinksState {
  currentRoute: string;
  currentHref: string;
  isBurgerMenuOpen: boolean;
}

const initialState: LinksState = {
  currentRoute: "",
  currentHref: "",
  isBurgerMenuOpen: false,
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
    setIsBurgerMenuOpen(state, action: PayloadAction<boolean>) {
      state.isBurgerMenuOpen = action.payload;
    },
    toggleIsBurgerMenuOpen(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    }
  }
})

export const {reducer: linksReducer, actions: linksActions } = slice;
