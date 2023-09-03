import React from 'react';

export type TFilterOptionProps<T> = {
    filterOptions: string[]
    selectedFilterOptions: T
    setSelectedFilterOptions: React.Dispatch<React.SetStateAction<T>>
}

export type TRangeFilterProps = {
    productPrices: number[] | undefined
}