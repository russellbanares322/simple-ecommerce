import axios from "axios"
import { TProducts } from "./types";

const {VITE_APP_PRODUCTS_API_BASE_URL} = import.meta.env

export const getAllProducts = async (): Promise<TProducts[]> => {
    const response = await axios.get(`${VITE_APP_PRODUCTS_API_BASE_URL}/products`)
    const data = response.data.products.map((product: any) => ({...product, quantity : 1, inputPrice: product.price}));
    return data
}

export const getProduct = async (id: string | undefined): Promise<TProducts> => {
    const response = await axios.get(`${VITE_APP_PRODUCTS_API_BASE_URL}/products/${id}`);
    const data: TProducts = response.data
    return data
}