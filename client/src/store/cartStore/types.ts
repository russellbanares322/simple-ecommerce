export type TCartProps = {
    id:number,
    inputPrice: number,
    quantity: number,
    title:string,
    description:string,
    price:number,
    rating:number,
    thumbnail:string
}

export type TCart = {
    cartItems: TCartProps[],
    addToCart: (productsData:TCartProps) => void,
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number, productQuantity: number) => void
}