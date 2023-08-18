import React from 'react';

export type TFilterOptionProps<T> = {
    filterOptions: string[]
    selectedFilterOptions: T
    setSelectedFilterOptions: React.Dispatch<React.SetStateAction<T>>
}