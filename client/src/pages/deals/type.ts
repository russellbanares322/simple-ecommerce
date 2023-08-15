import React from 'react';

export type TFilterOptionProps<T> = {
    filterOptions: string[]
    selectedFilterOptions: string[] | []
    setSelectedFilterOptions: React.Dispatch<React.SetStateAction<T>>
}