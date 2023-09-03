import React from 'react';

export type TFilterOptionProps<T> = {
    filterOptions: string[]
    selectedCategories: T
    setSelectedCategories: React.Dispatch<React.SetStateAction<T>>
}

export type TRangeFilterProps= {
    productPrices: number[] | undefined
    selectedPrices: number[]
    setSelectedPrices: React.Dispatch<React.SetStateAction<number[]>>
}