import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
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
    shippingAddress: {} as ShippingAddress,
  },
  total: Cookies.get("cartTotal") ? Number(Cookies.get("cartTotal")) : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartTotal: (state, action) => {
      console.log("length", state.cart.cartItems.length);
      if (state.cart.cartItems.length > 0) {
        if (state.cart.cartItems.length === 1) {
          state.total = Number(action.payload.price);
          Cookies.set("cartTotal", JSON.stringify(state.total));
        } else {
          const sum = current(state.cart.cartItems).reduce((a: any, b: any) => {
            console.log({ a }, { b });
            if (typeof a === "number") {
              return a + Number(b.price);
            }
            console.log("type", typeof a);
            return Number(a.price) + Number(b.price);
          });
          console.log("sum", sum.toFixed(2));
          state.total = sum.toFixed(2);
          Cookies.set("cartTotal", JSON.stringify(state.total));
        }
      }
    },
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
export const { addToCart, cartTotal } = cartSlice.actions;
export const selectCartItems = (state: RootState) =>
  state.cartStore.cart.cartItems;
export const selectCartTotal = (state: RootState) => state.cartStore.total;
export default cartSlice.reducer;
