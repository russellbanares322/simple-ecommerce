import { create } from "zustand";
import { TCart } from "./types";


const useCart = create<TCart>()((set) => ({
    cartItems: [],
    addToCart: (productsData) => set((state) =>({cartItems:  state.cartItems.some((cartItem) => cartItem.id === productsData.id) ? state.cartItems.filter((cartItem) => cartItem.id !== productsData.id) : [...state.cartItems, productsData]})
        
    
    ),

}))

export default useCart