import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	translate: false,
};

export const languageSlice = createSlice({
	name: "languageSlice",
	initialState,
	reducers: {
		changeLanguage: (state, action) => {
			state.translate = !state.translate;
		},
	},
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
