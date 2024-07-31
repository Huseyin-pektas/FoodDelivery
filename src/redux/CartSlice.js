import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.log("Sepete eklenmemiş bir öğe kaldırılamaz!");
            }
            state.items = newCart;
        },
        emptyCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions;

export const selectCartItem = state => state.cart.items;

export const selectCartItemById = (state, id) => state.cart.items.filter(item => item.id === id);
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);

export default CartSlice.reducer;
