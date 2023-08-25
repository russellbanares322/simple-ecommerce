import axios from "axios"
import { Product } from "./types";

const {VITE_APP_PRODUCTS_API_BASE_URL} = import.meta.env

export const getAllProducts = async () => {
 const response = await axios.get<Product[], any>(`${VITE_APP_PRODUCTS_API_BASE_URL}/products`)
 const products = response.data.products.map((product: any) => ({...product, quantity : 1, inputPrice: product.price}));
 return products
}