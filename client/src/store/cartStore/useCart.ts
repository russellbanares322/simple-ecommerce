import { create } from "zustand";
import { TCart } from "./types";


const useCart = create<TCart>()((set) => ({
    cartItems: [],
    addToCart: (productsData) => set((state) =>({cartItems:  state.cartItems.some((cartItem) => cartItem.id === productsData.id) ? state.cartItems.filter((cartItem) => cartItem.id !== productsData.id) : [...state.cartItems, productsData]})
    ),
    increaseQuantity:(productId) => set((state) => ({cartItems: state.cartItems.map((cartItem) => cartItem.id === productId ? ({
        ...cartItem,
        quantity: cartItem.quantity + 1,
        inputPrice: cartItem.inputPrice + cartItem.price,
    }) : cartItem)})),
    decreaseQuantity:(productId, productQuantity) => set((state) => ({cartItems: productQuantity === 1 ? state.cartItems.filter((cartItem) =>  cartItem.id !== productId) : state.cartItems.map((cartItem) => cartItem.id === productId ? ({
        ...cartItem,
        quantity: cartItem.quantity - 1,
        inputPrice: cartItem.inputPrice - cartItem.price
    }) : cartItem)}))

}))

export default useCart