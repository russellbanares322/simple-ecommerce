export type TProductProps = {
    id:number,
    title:string,
    description:string,
    price:number,
    rating:number,
    thumbnail:string
}

export type TProducts = {
    products: TProductProps[],
    getProducts: () => void
}