import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../store";

interface ShippingAddress {
  fullName: string;
  address: string;
  phoneNumber: string;
  city: string;
  email: string;
}
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  image: string;
  price: string;
}
interface Cart {
  cart: {
    cartItems: Array<CartItem>;
    shippingAddress: ShippingAddress;
  };
}

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems") as any)
      : ([] as CartItem[]),
    shippingAddress: undefined,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log({ action });
      const newItem = action.payload;
      const ifItemExists = state.cart.cartItems.find(
        (item: CartItem) => item.id === newItem.id
      );
      const cartItems = ifItemExists
        ? state.cart.cartItems.map((item: CartItem) =>
            item.id === ifItemExists.id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));

      state.cart.cartItems = cartItems;
      console.log("state cartItems: ", state.cart.cartItems);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) =>
  state.cartStore.cart.cartItems;
export default cartSlice.reducer;
