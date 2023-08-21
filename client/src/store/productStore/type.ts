export type TProductProps = {
    id:number,
    inputPrice: number,
    quantity:number,
    title:string,
    description:string,
    price:number,
    rating:number,
    thumbnail:string
}

export type TProducts = {
    products: TProductProps[],
    isLoading:boolean,
    getProducts: () => void
}