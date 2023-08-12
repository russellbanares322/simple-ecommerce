export type TCartItemProps = {
    id:number,
    inputPrice:number,
    quantity:number,
    title:string,
    rating:number,
    price:number,
    thumbnail: string
}

export type TCartElementProps = {
    isCartOpen: boolean,
    handleCloseCart: () => void
}