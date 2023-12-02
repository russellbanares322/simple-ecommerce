import React from 'react';

export type TFilterOptionProps<T> = {
    filterOptions: string[]
    selectedCategories: T
    setSelectedCategories: React.Dispatch<React.SetStateAction<T>>
}

export type TRangeFilterProps= {
    selectedPrice: number
    setIsUserSelectingPrice: React.Dispatch<React.SetStateAction<(boolean)>>
    setSelectedPrice: React.Dispatch<React.SetStateAction<(number)>>
}

export type TFormattedProductsData = {
    id: number,
    inputPrice: number,
    category: string,
    quantity: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    thumbnail: string,
}
