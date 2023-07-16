import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	translate: false,
	contactStatus: false,
};

export const languageSlice = createSlice({
	name: "languageSlice",
	initialState,
	reducers: {
		changeLanguage: (state, action) => {
			state.translate = !state.translate;
		},

		openContact: (state, action) => {
			if (action.payload === true) {
				state.contactStatus = true;
			} else {
				state.contactStatus = false;
			}
		},
	},
});

export const { changeLanguage, openContact } = languageSlice.actions;
export default languageSlice.reducer;
