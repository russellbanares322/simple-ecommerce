export type TCartProps = {
    id:number,
    title:string,
    description:string,
    price:number,
    rating:number,
    thumbnail:string
}

export type TCart = {
    cart: TCartProps[],
    addToCart: (productsData:TCartProps) => void
}