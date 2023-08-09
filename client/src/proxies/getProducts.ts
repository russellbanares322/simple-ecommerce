import axios from 'axios'

const getProducts = async (): Promise<any> =>  {
    const {VITE_APP_PRODUCTS_API_BASE_URL} = import.meta.env
    const {data} = await axios.get(`${VITE_APP_PRODUCTS_API_BASE_URL}/products`);
    return data.products

}

export default getProducts