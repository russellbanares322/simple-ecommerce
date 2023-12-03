import React from 'react';

export type TFilterOptionProps = {
    productCategories: string[]
    selectCategory: (arg:string) => void,
    checkIfSelectedCategoryIsAdded: (arg: string) => boolean
}

export type TRangeFilterProps= {
    selectPrice:(e: React.ChangeEvent<HTMLInputElement>) => void
    selectedPrice: number
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

export type TFilterOptions = {
    selectedPrice: number,
    selectedCategories: string[]
}