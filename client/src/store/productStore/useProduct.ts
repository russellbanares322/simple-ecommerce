import axios from "axios";
import { create } from "zustand";
import { TProducts } from "./type";
const {VITE_APP_PRODUCTS_API_BASE_URL} = import.meta.env

const useProduct = create<TProducts>()((set) => ({
    products: [],
    isLoading: true,
    getProducts: async() => {
        const {data} = await axios.get(`${VITE_APP_PRODUCTS_API_BASE_URL}/products`);
        set({ products: data.products.map((product: any) => ({...product, quantity : 1, inputPrice: product.price})), isLoading:false})
    } 

}))

export default useProduct