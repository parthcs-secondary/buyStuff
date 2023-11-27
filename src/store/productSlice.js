import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCard(state, action) {
            return action.payload;
        },
        // removeFromCart(state, action) {},
        // addToCard(state, action) {},
    }
})

export const { addToCard } = productSlice.actions;
export default productSlice.reducer;