import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cvSectionTop: null,
	ourWorkSectionTop: null,
};

const scrollingSlice = createSlice({
	name: "scrollingSlice",
	initialState,
	reducers: {
		findTheTopOfElement: (state, action) => {
			if (action.payload.name === "ourWorks") {
				state.ourWorkSectionTop = action.payload.top;
			} else {
				state.cvSectionTop = action.payload.top;
			}
		},
	},
});

export const { findTheTopOfElement } = scrollingSlice.actions;
export default scrollingSlice.reducer;
