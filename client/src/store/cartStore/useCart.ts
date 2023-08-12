import { create } from "zustand";
import { TCart } from "./types";


const useCart = create<TCart>()((set) => ({
    cart: [],
    addToCart: (productsData) => set((state) => ({cart: [...state.cart, productsData]})),

}))

export default useCart